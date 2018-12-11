import * as React from "react";
import './SectionWrapper.scss'
import cn from 'classnames';
import { Icon } from '../Icon/Icon';

interface Props {
    children: string;
    title: string;
    mode?: "isEdit" | "isActive";
}

export class SectionWrapper extends React.Component<Props> {
    public render() {
        const { children, mode, title } = this.props
        return (
            <section className={
                cn({
                    [`section-wrapper_${mode}`]: mode,
                }, 
                'section-wrapper'
                )}>
                    <h2 className={cn({
                        ['section-wrapper__title_isActive']: mode === 'isActive'
                        }, "section-wrapper__title"
                    )}>
                        {title}
                    </h2>
                {children}
                {!(mode === 'isEdit') && <button className="section-wrapper__button-edit">
                    <Icon icon="edit" />
                </button>}
            </section>
        );
    }
}