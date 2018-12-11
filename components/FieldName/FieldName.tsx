import * as React from "react";
import cn from 'classnames';
import './FieldName.scss'

interface Props {
    children: string;
    isEdit?: boolean;
}

export class FieldName extends React.Component<Props> {
    public render() {
        const { children, isEdit } = this.props
        return (
            <p className={
                cn({
                    ['fieldName_isEdit']: isEdit
                }, 'fieldName')
            }>
                <span className={
                    cn({
                        ['fieldName__text_isEdit']: isEdit
                    }, 'fieldName__text')
                }>{children}{!isEdit && ':'}</span>
            </p>
        );
    }
}