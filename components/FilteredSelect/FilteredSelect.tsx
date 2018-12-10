import * as React from "react";
import './FilteredSelect.scss';
import cn from 'classnames';
import { Icon } from '../Icon/Icon';

interface Props {
    items: string[];
    placeholder: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}

export class FilteredSelect extends React.Component<Props> {
    wrapper: HTMLDivElement;
    state = {
        isOpen: false,
        filter: '',
        activeItem: this.props.defaultValue || ''
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    handleWrapperRef = (ref: HTMLDivElement) => this.wrapper = ref;

    handleClickOutside = (event: MouseEvent) => {
        const target: any = event.target;
        if (!this.wrapper || !this.wrapper.contains(target)) {
            this.setState({ isOpen: false })
        }
    }

    handleToggle = () => this.setState({ isOpen: !this.state.isOpen })

    handleFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({ filter: e.target.value })

    handleChange = (value: string) => (e: React.MouseEvent<HTMLElement>) => {
        this.setState({ activeItem: value, isOpen: false })
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    public render() {
        const { isOpen, filter, activeItem } = this.state;
        const { items, placeholder } = this.props;
        return (
            <div className={cn('filtered-select', isOpen && 'filtered-select_open')} ref={this.handleWrapperRef}>
                <button
                    className='filtered-select__title'
                    type='button'
                    onClick={this.handleToggle}
                >
                    {
                        activeItem
                            ? <span className='filtered-select__value'>{activeItem}</span>
                            : <span className='filtered-select__placeholder'>{placeholder}</span>
                    }
                </button>
                <div className='filtered-select__drop'>
                    <div className='filtered-select__filter'>
                        <div className="filtered-select__search-field">
                            <input
                                type='text'
                                className='filtered-select__input'
                                onChange={this.handleFilter}
                            />
                            <span className='filtered-select__icon'>
                                <Icon icon='search' />
                            </span>
                        </div>
                    </div>
                    <div className='filtered-select__list'>
                        {items
                            .filter(item =>
                                !filter || item.toLowerCase().indexOf(filter.toLowerCase()) !== - 1)
                            .map(item => (
                                <button
                                    type='button'
                                    className='filtered-select__item'
                                    onClick={this.handleChange(item)}
                                >
                                    {item}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}
