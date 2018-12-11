import * as React from "react";
import './Row.scss'
import cn from 'classnames'
import { FieldName } from '../FieldName/FieldName';

interface Props {
    className?: string;
    title: string;
    isEdit?: boolean;
}

export class Row extends React.Component<Props> {
    public render() {
        const { children, className, title, isEdit } = this.props
        return (
            <div className={cn(
                {
                    ['row']: true,
                    ['row_isEdit']: isEdit
                }, className
            )}>
                <FieldName isEdit={isEdit}>{title}</FieldName>
                <div className="row__content">{children}</div>
            </div>
        );
    }
}