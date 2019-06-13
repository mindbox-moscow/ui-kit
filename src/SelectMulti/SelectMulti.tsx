import * as React from "react";
import "./SelectMulti.scss";

import cn from "classnames";

interface IOption {
	title: string;
	value: string;
}

interface IProps {
	options: IOption[];
	name: string;
	selectedOptions?: IOption[];
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
		selectedOptions: this.props.selectedOptions || []
	};

	public wrapRef = React.createRef<HTMLDivElement>();

	public renderOptionsList = (option: IOption): JSX.Element => {
		const { title, value } = option;
		const { name } = this.props;

		return (
			<li key={value}>
				<label>
					<input
						type="checkbox"
						name={name}
						onChange={this.handleChange(option)}
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
		this.setState(state => ({
			...state,
			selectedOptions: [...state.selectedOptions, option]
		}));
	};

	public removeFromSelected = (option: IOption) => {
		this.setState(state => ({
			...state,
			selectedOptions: [
				...state.selectedOptions.filter(
					selectedOption => selectedOption !== option
				)
			]
		}));
	};

	public handleToggle = (): void =>
		this.setState(state => ({
			...state,
			isOpen: !state.isOpen
		}));

	public handleChange = (option: IOption) => (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		const { onChange } = this.props;

		if (e.target.checked) {
			this.addToSelected(option);
		} else {
			this.removeFromSelected(option);
		}

		if (onChange) {
			onChange(this.state.selectedOptions);
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
