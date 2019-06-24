import cn from "classnames";
import * as React from "react";
import { Icon } from "../Icon/Icon";

import "./Select.scss";

export interface IItem {
	title: string;
	disabled?: boolean;
	description?: string;
}

interface IProps {
	items: Array<IItem | null>;
	placeholder: string;
	size?: "small";
	disabled?: boolean;
	defaultValue?: string;
	isFiltered?: boolean;
	hasDescriptions?: boolean;
	onChange?: (item: IItem) => void;
	className?: string;
}

export class Select extends React.Component<IProps> {
	public wrapper: HTMLDivElement;
	public state = {
		activeItem: this.props.defaultValue || "",
		filter: "",
		isOpen: false
	};

	public componentDidMount() {
		document.addEventListener("click", this.handleClickOutside);
	}

	public componentWillUnmount() {
		document.removeEventListener("click", this.handleClickOutside);
	}

	public handleWrapperRef = (ref: HTMLDivElement) => (this.wrapper = ref);

	public render() {
		const { isOpen, filter, activeItem } = this.state;
		const {
			items,
			hasDescriptions,
			placeholder,
			isFiltered,
			disabled,
			size,
			className
		} = this.props;
		return (
			<div
				className={cn(
					"kit-select",
					isOpen && "kit-select_open",
					isOpen && hasDescriptions && "kit-select_selected",
					hasDescriptions && "kit-select_one-selected",
					isFiltered && "kit-select_filtered",
					size && `kit-select_size_${size}`,
					className
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
												<span
													className={cn(
														item.description &&
															"kit-select__option-title"
													)}
												>
													{item.title}
												</span>
												{item.description && (
													<span className="kit-select__desc">
														{item.description}
													</span>
												)}
											</React.Fragment>
										) : (
											item.title
										)}
									</button>
								) : (
									<div
										key={index}
										className="kit-select__separator"
									/>
								)
							)}
					</div>
				</div>
			</div>
		);
	}

	private handleClickOutside = (event: MouseEvent) => {
		const target: any = event.target;
		if (!this.wrapper || !this.wrapper.contains(target)) {
			this.setState({ isOpen: false });
		}
	};

	private handleToggle = () => this.setState({ isOpen: !this.state.isOpen });

	private handleFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
		this.setState({ filter: e.target.value });

	private handleChange = (item: IItem) => (
		e: React.MouseEvent<HTMLElement>
	) => {
		this.setState({ activeItem: item.title, isOpen: false });
		if (this.props.onChange) {
			this.props.onChange(item);
		}
	};
}
