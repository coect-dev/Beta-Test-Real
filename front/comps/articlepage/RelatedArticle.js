import { colors } from "../../shared.js";
import ArticleSummary from "../../comps/ArticleSummary";
import ArticleSummaryHot from "../../comps/ArticleSummaryHot";

export default function RelatedArticle(props) {
	return (
		props.relatedarticle.current.length > 0 && (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 32,
					fontFamily: "SpoqaHanSansNeo",
					marginLeft: -10,
				}}
			>
				<div
					style={{
						fontSize: props.ismobile ? 18 : 22,
						display: "flex",
						// marginLeft: props.ismobile ? 30 : 0,
					}}
				>
					<span style={{ color: colors.primary }}>{props.article.brand}</span>
					&nbsp;
					<span style={{ color: colors.primary }}>{props.article.model}</span>
					&nbsp;
					<span>관련 영상 더보기</span>
				</div>
				<div
					style={{
						width: props.ismobile ? "80vw" : "40vw",

						display: "flex",
						gap: 36,
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{props.relatedarticle.current.slice(0, 2).map((article) => (
						<div key={article.id} style={{ flex: 1 }}>
							{!props.ismobile && <ArticleSummary article={article} />}
							{props.ismobile && <ArticleSummaryHot article={article} />}
						</div>
					))}
				</div>
			</div>
		)
	);
}
