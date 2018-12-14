import * as React from "react";
import './Help.scss'
import { Icon } from '../Icon/Icon'

interface Props {
}

export class Help extends React.Component<Props> {
    public render() {
        return (
            <div className='help'>
                <Icon icon='help__icon' />
            </div>
        );
    }
}
