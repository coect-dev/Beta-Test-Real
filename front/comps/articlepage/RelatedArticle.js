import { colors } from "../../shared.js";
import ArticleSummaryToday from "../../comps/ArticleSummaryToday";

export default function RelatedArticle(props) {
  return(
    props.relatedarticle.current.length > 0 && (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 32,
							marginTop: 112,
						}}
					>
						<div
							style={{
								fontSize: props.isMobile ? 18 : 22,
								display: "flex",
								marginLeft: props.isMobile ? 30 : 0,
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
								width: "100%",
								display: "flex",
								gap: 36,
								flexDirection: props.ismobile ? "column" : "row",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							{props.relatedarticle.current.slice(0,3).map((article) => (
								<div key={article.id} style={{ flex: 1 }}>
									<ArticleSummaryToday article={article} />
								</div>
							))}
						</div>
					</div>
				)
    )
}