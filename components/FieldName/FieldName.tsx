import * as React from "react";
import './FieldName.scss'

interface Props {
    children: string;
}

export class FieldName extends React.Component<Props> {
    public render() {
        const { children } = this.props
        return (
            <p className='fieldName'>
                <span className='fieldName__text'>{children}:</span>
            </p>
        );
    }
}