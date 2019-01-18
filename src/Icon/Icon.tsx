import * as React from "react";
import "./Icon.scss";

import cn from "classnames";

interface Props {
    className?: string;
    icon: string;
}

export class Icon extends React.Component<Props> {
    public render() {
        const { icon, className } = this.props;
        return (
            <span
                className={cn(
                    "kit-icon",
                    {
                        [`kit-icon_${icon}`]: icon
                    },
                    className
                )}
            />
        );
    }
}
