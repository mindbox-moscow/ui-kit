import * as React from "react";
import './Text.scss'
import cn from 'classnames';

interface Props {
    children: string;
    mode?: string;
}

export class Text extends React.Component<Props> {
    public render() {
        const { children, mode } = this.props
        return (
            <p className={
                cn({
                    [`text_${mode}`]: mode,
                }, 
                'text'
                )}>
                {children}
            </p>
        );
    }
}