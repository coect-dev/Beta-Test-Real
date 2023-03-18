import { colors } from "../../shared.js";
import Link from "next/link";

import Author from "../../comps/Author.js";

export default function ArticleTitle(props) {
  return (
    <div style={{ margin: props.isMobile ? "10px" : "0px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontSize: 14,
          color: colors.primary,
        }}
      >
        <Link
          href={`/car/brand/${props.brand.nameEng}`}
          style={{ textDecoration: "none", color: colors.primary }}
        >
          {props.article.brand}
        </Link>
        <span style={{ color: "#BDBDBD" }}>&gt;</span>
        <Link
          href={`/car/brand/${props.brand.nameEng}?model=${props.model.name}`}
          style={{ textDecoration: "none", color: colors.primary }}
        >
          {props.article.model}
        </Link>
      </div>
      <div style={{ dipslay: "flex", gap: 6 }}>
        <h1
          style={{
            fontWeight: 500,
            fontSize: props.isMobile ? 20 : 28,
            margin: 0,
          }}
        >
          {props.article.title}
        </h1>
        <div
          style={{
            display: "flex",
            gap: 6,
            alignItems: "center",
            marginTop: props.isMobile ? "8px" : "10px",
          }}
        >
          <Author
            name={props.article.channelName}
            image={props.article.channelImageUrl}
          />
          <span style={{ color: "#919191" }}>|</span>
          <span style={{ fontSize: 15, color: "#919191" }}>
            {props.article.date.replaceAll("-", ".") + "."}
          </span>
        </div>
      </div>
    </div>
)}