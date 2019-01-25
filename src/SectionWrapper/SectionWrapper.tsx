import * as React from "react";
import "./SectionWrapper.scss";
import cn from "classnames";
import { Icon } from "../Icon/Icon";

interface Props extends React.Props<SectionWrapper> {
    title: string;
    isEdit?: boolean;
    isActive?: boolean;
    theme?: string;
    onChangeState?: (isEdit: boolean) => void;
}

export class SectionWrapper extends React.Component<Props> {
    wrapper: HTMLDivElement;

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    handleWrapperRef = (ref: HTMLDivElement) => (this.wrapper = ref);

    handleClickOutside = (event: MouseEvent) => {
        const target: any = event.target;
        const { onChangeState = () => { } } = this.props;

        if (!this.wrapper || !this.wrapper.contains(target)) {
            onChangeState(false);
        }
    };

    public render() {
        const {
            children,
            isEdit,
            isActive,
            title,
            theme,
            onChangeState = () => { }
        } = this.props;

        return (
            <section
                ref={this.handleWrapperRef}
                className={cn(
                    {
                        [`kit-section-wrapper_edit`]: isEdit,
                        [`kit-section-wrapper_active`]: isActive,
                        [`kit-section-wrapper_theme_${theme}`]: theme
                    },
                    "kit-section-wrapper"
                )}
            >
                <h2 className="kit-section-wrapper__title">
                    <span
                        className={cn({
                            "kit-section-wrapper__title-inner": true,
                            "kit-section-wrapper__title-inner_show": isEdit,
                        })}
                    >{title}</span>
                    <button
                        className={cn({
                            "kit-section-wrapper__button": true,
                            "kit-section-wrapper__button_show": !isEdit,
                        })}
                        type='button'
                        onClick={() => onChangeState(true)}
                    >
                        {title}
                    </button>
                </h2>
                {children}
                <button
                    className={cn({
                        "kit-section-wrapper__button-edit": true,
                        "kit-section-wrapper__button-edit_hide": isEdit,
                    })}
                    onClick={() => onChangeState(true)}
                >
                    <Icon icon="edit" />
                </button>
            </section>
        );
    }
}
