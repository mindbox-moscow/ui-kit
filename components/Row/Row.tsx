import * as React from "react";
import './Row.scss'
import cn from 'classnames'

interface Props {
    title: string;
    isEdit?: boolean;
}

export class Row extends React.Component<Props> {
    public render() {
        const { children, title, isEdit } = this.props
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
                <div className='row__content'>{children}</div>
            </div>
        );
    }
}