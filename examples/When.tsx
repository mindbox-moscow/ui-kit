import * as React from "react";
import * as ReactDOM from "react-dom";
import { When } from "../templates/When/When";

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
    <When />,
    entryElement
)
