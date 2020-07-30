import React from "react";
import ReactDOM from "react-dom";
import { MultiSelectTest } from "../utils";

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
	<div
		style={{
			position: "relative",
			width: "1200px",
			marginLeft: "auto",
			marginRight: "auto"
		}}
	>
		<MultiSelectTest />
	</div>,
	entryElement
);
