import * as React from "react";
import "./SelectMulti.scss";

import cn from "classnames";

interface IOption {
	title: string;
	value: string;
	checked?: boolean;
	disabled?: boolean;
}

interface IProps {
	options: IOption[];
	name: string;
	onChange?: (options: IOption[]) => void;
	className?: string;
}

interface IState {
	isOpen: boolean;
	selectedOptions: IOption[];
}

export class SelectMulti extends React.Component<IProps, IState> {
	public state = {
		isOpen: false,
		selectedOptions: this.props.options.filter(({ checked }) => checked)
	};

	public wrapRef = React.createRef<HTMLDivElement>();

	public renderOptionsList = (option: IOption): JSX.Element => {
		const { title, value, disabled } = option;
		const { name } = this.props;
		const { selectedOptions } = this.state;

		const checked = !!selectedOptions.find(
			selectedOption => selectedOption.value === option.value
		);

		return (
			<li key={value}>
				<label>
					<input
						type="checkbox"
						name={name}
						onChange={this.handleChange(option)}
						checked={checked}
						disabled={disabled}
					/>
					<span>{title}</span>
				</label>
			</li>
		);
	};

	public renderDropdownList = (options: IOption[]): JSX.Element => (
		<div className="kit-select-multi__dropdown">
			<div className="kit-select-multi__dropdown-list-wrap">
				<ul className="kit-select-multi__dropdown-list">
					{options && options.map(this.renderOptionsList)}
				</ul>
			</div>
		</div>
	);

	public addToSelected = (option: IOption) => {
		const { onChange } = this.props;
		const selectedOptions = [
			...this.state.selectedOptions,
			{ ...option, checked: true }
		];

		this.setState({ selectedOptions });

		if (onChange) {
			onChange(selectedOptions);
		}
	};

	public removeFromSelected = (option: IOption) => {
		const { onChange } = this.props;
		const selectedOptions = [
			...this.state.selectedOptions.filter(
				({ value }) => value !== option.value
			)
		];

		this.setState({ selectedOptions });

		if (onChange) {
			onChange(selectedOptions);
		}
	};

	public handleToggle = (): void =>
		this.setState(state => ({
			...state,
			isOpen: !state.isOpen
		}));

	public handleChange = (option: IOption) => (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		if (e.target.checked) {
			this.addToSelected(option);
		} else {
			this.removeFromSelected(option);
		}
	};

	public render() {
		const { options } = this.props;
		const { isOpen, selectedOptions } = this.state;

		return (
			<div
				className={cn(
					"kit-select-multi",
					isOpen && "kit-select-multi_show_dropdown"
				)}
				ref={this.wrapRef}
			>
				<button
					className="kit-select-multi__label"
					type="button"
					onClick={this.handleToggle}
				>
					<div className="kit-select-multi__label-title">
						{selectedOptions &&
							selectedOptions.reduce(
								(acc, { title }, i) =>
									`${acc}${i > 0 ? ";" : ""} ${title}`,
								""
							)}
					</div>
				</button>
				{isOpen && this.renderDropdownList(options)}
			</div>
		);
	}
}
