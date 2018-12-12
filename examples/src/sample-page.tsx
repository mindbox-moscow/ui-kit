import * as React from "react";
import * as ReactDOM from "react-dom";

import { SectionWrapper } from "@mindbox/ui-kit/components/SectionWrapper";
import { Button } from "@mindbox/ui-kit/components/Button";

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
    <SectionWrapper title="Tiitle">
        <p>Test</p>
        <Button size="large" color="lightgray">Test</Button>
    </SectionWrapper>,
    entryElement
)
