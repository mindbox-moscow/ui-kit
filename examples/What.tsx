import * as React from "react";
import * as ReactDOM from "react-dom";

import { What } from "../templates/What/What";

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
    <What />,
    entryElement
)
