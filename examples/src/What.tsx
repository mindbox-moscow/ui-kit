import * as React from "react";
import * as ReactDOM from "react-dom";

import { What } from "@mindbox/ui-kit/templates/What/What";

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
    <What />,
    entryElement
)
