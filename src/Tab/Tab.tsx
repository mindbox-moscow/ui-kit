import * as React from "react";
import "./Tab.scss";

import cn from "classnames";

interface Props {
    className?: string;
    children: string;
    isSelected?: boolean;
    onClick?: any;
    value: string;
}

export class Tab extends React.Component<Props> {
    public render() {
        const { isSelected, children, className, onClick, value } = this.props;
        const handleClick = () => onClick(value);
        return (
            <button onClick={handleClick} className={cn("kit-tab", { [`kit-tab_selected`]: isSelected }, className)}>
                {children}
            </button>
        );
    }
}
