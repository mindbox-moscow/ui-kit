import * as React from "react";
import "./Select.scss";
import cn from "classnames";
import { Icon } from "../Icon/Icon";

interface Item {
    title: string;
    disabled?: boolean;
}

interface Props {
    items: (Item | null)[];
    placeholder: string;
    size?: "small";
    disabled?: boolean;
    defaultValue?: string;
    isFiltered?: boolean;
    onChange?: (item: Item) => void;
}

export class Select extends React.Component<Props> {
    wrapper: HTMLDivElement;
    state = {
        isOpen: false,
        filter: "",
        activeItem: this.props.defaultValue || ""
    };

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    handleWrapperRef = (ref: HTMLDivElement) => (this.wrapper = ref);

    handleClickOutside = (event: MouseEvent) => {
        const target: any = event.target;
        if (!this.wrapper || !this.wrapper.contains(target)) {
            this.setState({ isOpen: false });
        }
    };

    handleToggle = () => this.setState({ isOpen: !this.state.isOpen });

    handleFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({ filter: e.target.value });

    handleChange = (item: Item) => (e: React.MouseEvent<HTMLElement>) => {
        this.setState({ activeItem: item.title, isOpen: false });
        if (this.props.onChange) {
            this.props.onChange(item);
        }
    };

    public render() {
        const { isOpen, filter, activeItem } = this.state;
        const { items, placeholder, isFiltered, disabled, size } = this.props;
        return (
            <div
                className={cn(
                    "select",
                    isOpen && "select_open",
                    isFiltered && "select_filtered",
                    {
                        [`select_size_${size}`]: size
                    }
                )}
                ref={this.handleWrapperRef}
            >
                <button
                    className="select__title"
                    type="button"
                    onClick={this.handleToggle}
                    disabled={disabled}
                >
                    {activeItem ? (
                        <span className="select__value">{activeItem}</span>
                    ) : (
                        <span className="select__placeholder">
                            {placeholder}
                        </span>
                    )}
                </button>
                <div className="select__drop">
                    {isFiltered && (
                        <div className="select__filter">
                            <div className="select__search-field">
                                <input
                                    type="text"
                                    className="select__input"
                                    onChange={this.handleFilter}
                                />
                                <span className="select__icon">
                                    <Icon icon="search" />
                                </span>
                            </div>
                        </div>
                    )}
                    <div className="select__list">
                        {items
                            .filter(
                                item =>
                                    !filter ||
                                    !item ||
                                    item.title
                                        .toLowerCase()
                                        .indexOf(filter.toLowerCase()) !== -1
                            )
                            .map((item, index) =>
                                item ? (
                                    <button
                                        key={index}
                                        type="button"
                                        className="select__item"
                                        disabled={item.disabled}
                                        onClick={this.handleChange(item)}
                                    >
                                        {item.title}
                                    </button>
                                ) : (
                                    <div
                                        key={index}
                                        className="select__separator"
                                    />
                                )
                            )}
                    </div>
                </div>
            </div>
        );
    }
}
