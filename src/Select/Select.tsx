import * as React from "react";
import "./Select.scss";
import cn from "classnames";
import { Icon } from "../Icon/Icon";

interface Item {
    title: string;
    disabled?: boolean;
    description?: string;
}

interface Props {
    items: (Item | null)[];
    placeholder: string;
    description?: string;
    size?: "small";
    disabled?: boolean;
    defaultValue?: string;
    isFiltered?: boolean;
    isSelected?: boolean;
    onChange?: (item: Item) => void;
}

export class Select extends React.Component<Props> {
    wrapper: HTMLDivElement;
    state = {
        isOpen: false,
        filter: "",
        activeItem: this.props.defaultValue || "",
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
        const { items, isSelected,  placeholder, isFiltered, disabled, size } = this.props;
        return (
            <div
                className={cn(
                    "kit-select",
                    isOpen && "kit-select_open",
                    isOpen && isSelected && "kit-select_selected",
                    isFiltered && "kit-select_filtered",
                    {
                        [`kit-select_size_${size}`]: size
                    }
                )}
                ref={this.handleWrapperRef}
            >
                <button
                    className="kit-select__title"
                    type="button"
                    onClick={this.handleToggle}
                    disabled={disabled}
                >
                    {activeItem ? (
                        <span className="kit-select__value">{activeItem}</span>
                    ) : (
                            <span className="kit-select__placeholder">
                                {placeholder}
                            </span>
                        )}
                </button>
                <div className="kit-select__drop">
                    {isFiltered && (
                        <div className="kit-select__filter">
                            <div className="kit-select__search-field">
                                <input
                                    type="text"
                                    className="kit-select__input"
                                    onChange={this.handleFilter}
                                />
                                <span className="kit-select__icon">
                                    <Icon icon="search" />
                                </span>
                            </div>
                        </div>
                    )}
                    <div className="kit-select__list">
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
                                        className="kit-select__item"
                                        disabled={item.disabled}
                                        onClick={this.handleChange(item)}
                                    >
                                        {item.description ? (
                                            <React.Fragment>
                                                <h6 className="kit-select__h6">{item.title}</h6>
                                                <p className="kit-select__desc">{item.description}</p>
                                            </React.Fragment>
                                            ) : (item.title)
                                        }
                                    </button>
                                ) : (
                                        <div
                                            key={index}
                                            className="kit-select__separator"
                                        />
                                    )
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}
