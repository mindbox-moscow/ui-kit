import * as React from "react";
import * as ReactDOM from "react-dom";

import { SectionWrapper } from "../components/SectionWrapper";
import { Button } from "../components/Button";

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
    <SectionWrapper title="Tiitle" isEdit>
        <p>Test other</p>
        <Button size="large" color="lightgray">Test</Button>
        <p>Other test</p>
    </SectionWrapper>,
    entryElement
)
