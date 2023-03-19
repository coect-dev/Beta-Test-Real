import { useState, useRef, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from '@mui/material/Tabs';

import SummaryText from "../../comps/articlepage/SummaryText.js";
import RelatedArticle from "../../comps/articlepage/RelatedArticle.js";


export default function RightPage(props) {

	const [value, setValue] = useState("1");

	const handleChange = (newVal) => {
		if (value == "1") setValue("2");
		else setValue("1");
	};
	console.log(value);



  return(
  <Box sx={{  typography: "body1" }}>
						<TabContext value={value}>
							<Box sx={{ borderBottom: 1, borderColor: "divider", color:"red" }}>
								<Tabs onChange={handleChange}>
									<Tab
										label="내용 용약"
										value="1"
										style={{ color: value == 1 ? "black" : "lightgray"}}
									/>
									<Tab
										label="추천 영상"
										value="2"
										style={{ color: value == 2 ? "black" : "lightgray" }}
									/>
								</Tabs>
							</Box>
							<TabPanel value="1">
								<SummaryText article={props.article} currentTime={props.currentTime} ismobile={props.ismobile} player={props.player}/>
							</TabPanel>
							<TabPanel value="2">
								<RelatedArticle
									relatedarticle={props.relatedArticles}
									article={props.article}
									ismobile={props.ismobile}
								/>
							</TabPanel>
						</TabContext>
					</Box>)
}