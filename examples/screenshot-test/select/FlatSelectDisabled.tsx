import React from "react";
import ReactDOM from "react-dom";
import { FlatSelectTest } from "../utils";

const DefaultFlatSelect = () => <FlatSelectTest disabled={true} />;

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
		<DefaultFlatSelect />
	</div>,
	entryElement
);
