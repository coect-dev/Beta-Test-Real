import { colors } from "../../shared.js";
import style from "../../comps/hover.module.css";

export default function Agenda(props) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 20,
				maxHeight: 330,
				overflow: "scroll",
				flexGrow: 1,
				borderRadius: 8,
				borderWidth: 1,
				borderColor: "#919191",
				borderStyle: "solid",
				paddingTop: 18,
				paddingLeft: 20,
				paddingRight: 20,
				paddingBottom: 18,
				position: "sticky",
				top: 40,
			}}
		>
			<div
				style={{ fontSize: 18, marginBottom: 20, color: colors.primaryDark }}
			>
				목차
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 16,
				}}
			>
				{props.article.summaries.map((s, i) => (
					<a
						key={i}
						onClick={() => {
							player.seekTo(s.start);
						}}
						href="#/"
						style={{
							fontSize: props.isMobile ? 14 : 16,
							textDecoration: "none",
							color:
								i >= props.article.summaries.length - 1 ||
								props.currentTime == props.article.summaries[i + 1].start
									? colors.primary
									: colors._300,
						}}
						className={style.chapter}
					>
						{i + 1}. {s.topic}
					</a>
				))}
			</div>
		</div>
	);
}




	// <div
	// 							style={{
	// 								display: "flex",
	// 								flexDirection: "column",
	// 								gap: 10,
	// 								maxHeight: 330,
	// 								overflow: "scroll",
	// 								flexGrow: 1,
	// 								borderRadius: 8,
	// 								borderWidth: 1,
	// 								borderColor: "#919191",
	// 								borderStyle: "solid",
	// 								paddingTop: 15,
	// 								paddingLeft: 20,
	// 								paddingRight: 20,
	// 								paddingBottom: 18,
	// 								boxSizing: "border-box",
	// 								// position: 'sticky',
	// 								// top:10
	// 							}}
	// 						>
	// 							<div style={{ fontSize: 16, color: colors.primaryDark }}>
	// 								목차
	// 							</div>
	// 							<div
	// 								style={{
	// 									display: "flex",
	// 									flexDirection: "column",
	// 									gap: 16,
	// 								}}
	// 							>
	// 								{article.summaries.map((s, i) => (
	// 									<a
	// 										key={i}
	// 										onClick={() => {
	// 											2;
	// 											player.seekTo(s.start);
	// 										}}
	// 										href="#/"
	// 										style={{
	// 											fontSize: isMobile ? 14 : 16,
	// 											textDecoration: "none",
	// 											color:
	// 												currentTime >= s.start &&
	// 												(i >= article.summaries.length - 1 ||
	// 													currentTime < article.summaries[i + 1].start)
	// 													? colors.primary
	// 													: colors._300,
	// 										}}
	// 									>
	// 										{i + 1}. {s.topic}
	// 									</a>
	// 								))}
	// 							</div>
	// 						</div>
	// 					)
