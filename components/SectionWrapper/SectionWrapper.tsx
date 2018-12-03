import * as React from "react";
import './SectionWrapper.scss'
import cn from 'classnames';

interface Props {
    children: string;
    title: string;
    /** 
        * may be: isEdit, isActive
    */
    mod?: string;
}

export class SectionWrapper extends React.Component<Props> {
    public render() {
        const { children, mod, title } = this.props
        return (
            <section className={
                cn({
                    [`section-wrapper_${mod}`]: mod,
                }, 
                'section-wrapper'
                )}>
                    <h2 className={cn({
                        ['section-wrapper__title_isActive']: mod === 'isActive'
                        }, "section-wrapper__title"
                    )}>
                        {title}
                    </h2>
                {children}
            </section>
        );
    }
}