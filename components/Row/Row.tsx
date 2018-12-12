import * as React from "react";
import './Row.scss'
import cn from 'classnames'

interface Props {
    title: string;
    text?: string;
    isEdit?: boolean;
}

export class Row extends React.Component<Props> {
    public render() {
        const { children, title, isEdit, text } = this.props
        return (
            <div className={cn(
                {
                    ['row']: true,
                    ['row_edit']: isEdit
                }
            )}>
                <div className='row__name'>
                    <span className='row__name-text'>{title}{!isEdit && ':'}</span>
                </div>
                <div className='row__content'> {
                    text
                    ? (
                        <div className='row__text'>{text}</div>
                    ) : children
                }</div>
            </div>
        );
    }
}
