import * as React from "react";
import './Help.scss'
import { Icon } from '../Icon/Icon'

export class Help extends React.Component<{}> {
    public render() {
        const { children } = this.props;
        return (
            <div className='help'>
                <Icon icon='help__icon' />
                <div className='help__inner'>
                    {children}
                </div>
            </div>
        );
    }
}
