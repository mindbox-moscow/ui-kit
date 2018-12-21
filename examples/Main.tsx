import * as React from "react";
import * as ReactDOM from "react-dom";
import { Main } from "../templates/Main/Main";

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
    <Main />,
    entryElement
)
