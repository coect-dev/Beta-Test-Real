import TextUnit from "../../comps/TextUnit.js";


export default function SummaryText(props) {
return(
			<div
						style={{
							margin: "10px",
							display: "flex",
							flexDirection: "column",
							gap: 20,
							height:"80vh",
							overflowY:"scroll",
							width:"50vw"
						}}
					>
						<div style={{fontWeight:"500", fontSize: 18}}> 콘텐츠 핵심 내용 보기</div>
						{props.article.summaries.map((summary, i) =>
							summary.text ? (
								<TextUnit
									key={i}
									topic={`${i + 1}. ${summary.topic}`}
									start={summary.start}
									isPlaying={
										props.currentTime >= summary.start &&
										(i >= article.summaries.length - 1 ||
											props.currentTime < article.summaries[i + 1].start)
									}
									seekTo={() => {
											player.seekTo(summary.start);
											setPlaying(true);
											player.playVideo();
											}}
									
									
								>
									{summary.text}
								</TextUnit>
							) : (
								<div
									key={i}
									style={{
										textAlign: "center",
										marginTop: 20,
										marginBottom: 20,
									}}
								>
									<Image
										src={`/imgs/figures/${summary.image}`}
										width={400}
										height={200}
										alt="영상 캡쳐 이미지"
									/>
								</div>
							)
						)}
					</div>

)}