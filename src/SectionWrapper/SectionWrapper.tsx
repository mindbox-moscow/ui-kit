import * as React from "react";
import './SectionWrapper.scss'
import cn from 'classnames';
import { Icon } from '../Icon/Icon';

interface Props extends React.Props<SectionWrapper> {
    title: string;
    isEdit?: boolean;
    isActive?: boolean;
    theme?: string;
    onChangeState?: (event: React.MouseEvent<HTMLElement>) => void
}

export class SectionWrapper extends React.Component<Props> {
    public render() {
        const { children, isEdit, isActive, title, theme, onChangeState } = this.props
        return (
            <section className={
                cn({
                    [`section-wrapper_edit`]: isEdit,
                    [`section-wrapper_active`]: isActive,
                    [`section-wrapper_theme_${theme}`]: theme
                }, 'section-wrapper')
            }>
                <h2 className='section-wrapper__title'>
                    {title}
                </h2>
                {children}
                {
                    !isEdit && (
                        <button
                            className="section-wrapper__button-edit"
                            onClick={onChangeState}
                        >
                            <Icon icon="edit" />
                        </button>
                    )
                }
            </section>
        );
    }
}
