import * as React from "react";
import './Icon.scss';

import cn from 'classnames';

interface Props {
    className?: string;
    icon: "play" | "pause";
}

export class Icon extends React.Component<Props> {
    public render() {
        const { icon, className } = this.props
        return (
            <span className={cn('icon',
                {
                    [`icon_${icon}`]: icon 
                }, className)
            }/>
        );
    }
}