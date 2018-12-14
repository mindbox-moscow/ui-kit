import * as React from "react";
import * as ReactDOM from "react-dom";
import { Whom } from "@mindbox/ui-kit/templates/Whom/Whom";

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
    <Whom />,
    entryElement
)
