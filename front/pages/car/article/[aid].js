import { useState, useRef, useCallback, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";
import Image from "next/image";
import Link from "next/link";

import Layout from "../../../comps/Layout.js";
import Subtitle from "../../../comps/Subtitle";
import ArticleSummaryToday from "../../../comps/ArticleSummaryToday";

import Author from "../../../comps/Author.js";
import {
	InformationTableMobile,
	InformationTableDesktop,
} from "../../../comps/articlepage/InformationTable.js";

import Agenda from "../../../comps/articlepage/Agenda.js";

import ArticleTitle from "../../../comps/articlepage/ArticleTitle.js";
import RightPage from "../../../comps/articlepage/RightPage.js";

import { articles, brands, colors } from "../../../shared";

import style from "../../../comps/hover.module.css";

export function getStaticPaths() {
	return {
		paths: articles.map((_) => ({ params: { aid: String(_.id) } })),
		fallback: false,
	};
}

export function getStaticProps({ params }) {
	return { props: { aid: params.aid } };
}

export default function ArticleIdPage(props) {
	const [player, setPlayer] = useState(null);
	const [playing, setPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	const getCurrentTimeInterval = useRef(null);

	const onPlayerReady = (event) => {
		setPlayer(event.target);
		clearInterval(getCurrentTimeInterval.current);
		getCurrentTimeInterval.current = setInterval(() => {
			setCurrentTime(event.target.getCurrentTime());
		}, 1000);
	};

	const isDesktop = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });
	const isYoutube = useMediaQuery({ query: "(max-width: 690px)" });

	const styles = {
		cell: {
			borderColor: "#919191",
			borderStyle: "solid",
			borderWidth: 1,
		},
	};
	const [key, setKey] = useState("home");

	const article = articles.find((a) => a.id == props.aid);
	const brand = brands.find((b) => b.name == article.brand);
	const model = brand.models.find((m) => m.name == article.model);
	const submodel =
		model.submodels.find((s) => s.name == article.submodel) ||
		model.submodels[0];
	const fullname = `${brand.name} ${model.name} ${
		submodel ? submodel.name + " " : ""
	} (${model.generation}세대)`;

	const relatedArticles = useRef(
		articles
			.filter((a) => a.brand == article.brand && a.id != article.id)
			.sort(function (a, b) {
				if (a.model == article.model) {
					return -1;
				} else if (b.model == article.model) {
					return 1;
				}
			})
			.slice(0, 3) // 랜덤으로 3개 뽑기
	);

	console.log(playing);

	return (
		<Layout
			title={article.title + " - COECT"}
			description={`${article.channelName}에서 ${article.brand} ${
				article.model
			}의 ${article.summaries
				.map((_) => _.topic)
				.slice(0, 10)
				.join(", ")} 등에 대해 다룹니다.`}
		>
			<div
				style={{
					maxWidth: "80vw",

					display: "flex",
					flexDirection: "column",
					// gap: 80,
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: isMobile ? "column" : "row",
						gap: 30,
													justifyContent: "center",
							alignContent: "center",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 20,
						}}
					>
						<YouTube
							videoId={article.videoId}
							opts={{
								width: isYoutube ? 300 : 654,
								height: isYoutube ? 180 : 368,
							}}
							style={{
								width: isYoutube ? 300 : 654,
								height: isYoutube ? 180 : 368,
							}}
							onReady={onPlayerReady}
							onPlay={() => setPlaying(true)}
							onPause={() => setPlaying(false)}
						/>
						<ArticleTitle
							isMobile={isMobile}
							brand={brand}
							article={article}
							model={model}
						/>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<div style={{ fontSize: 16, fontWeight: 700 }}>
								{" "}
								AI SearchBot*
							</div>
							<table
								style={{
									width: "100%",
									borderCollapse: "collapse",
									borderRadius: 8,
									borderStyle: "hidden",
									boxShadow: "0 0 0 1px #919191",
									overflow: "hidden",
									marginTop: 10,
								}}
							>
								<InformationTableDesktop submodel={submodel} styles={styles} />
								{/* )} */}
							</table>
						</div>
					</div>
					<RightPage
						article={article}
						currentTime={currentTime}
						relatedArticles={relatedArticles}
						ismobile={isMobile}
						player={player}
					/>
				</div>
			</div>
		</Layout>
	);
}
