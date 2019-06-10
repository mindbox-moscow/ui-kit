import * as React from "react";
import { Icon } from "../Icon";
import "./SelectNested.scss";

interface IOption {
	id: number;
	title: string;
	details: string[];
	children: IOption[] | null;
	disabled?: boolean;
}

interface IProps {
	options: IOption[];
	selectedOption?: IOption;
	onChange?: (option: IOption) => void;
}

interface IState {
	filterInput: string;
	isOpen: boolean;
	selectedOption: IOption | null;
}

const renderDetailsList = (details: string[]): JSX.Element[] =>
	details.map((detail, i) => (
		<li className="kit-select-nested__dropdown-option-details" key={i}>
			{detail}
		</li>
	));

export class SelectNested extends React.PureComponent<IProps, IState> {
	public state = {
		filterInput: "",
		isOpen: false,
		selectedOption: this.props.selectedOption || null
	};

	public renderOptionsList = (option: IOption): JSX.Element => {
		const { id, title, details, children, disabled } = option;
		const isOutOfFilter =
			title.toLowerCase().indexOf(this.state.filterInput) === -1;

		return (
			<li className="kit-select-nested__dropdown-option" key={id}>
				<button
					className="kit-select-nested__dropdown-option-label"
					type="button"
					onClick={this.handleChange(option)}
					disabled={disabled || isOutOfFilter}
				>
					<div className="kit-select-nested__dropdown-option-title">
						{title}
					</div>
					<ul className="kit-select-nested__dropdown-option-details-list">
						{renderDetailsList(details)}
					</ul>
				</button>
				{children && (
					<ul className="kit-select-nested__dropdown-sublist">
						{children.map(this.renderOptionsList)}
					</ul>
				)}
			</li>
		);
	};

	public renderDropdown = (options: IOption[]): JSX.Element => (
		<div className="kit-select-nested__dropdown">
			<div className="kit-select-nested__filter">
				<div className="kit-select-nested__search-field">
					<input
						type="text"
						className="kit-select-nested__input"
						onChange={this.handleFilter}
					/>
					<span className="kit-select-nested__icon">
						<Icon icon="search" />
					</span>
				</div>
			</div>
			<ul className="kit-select-nested__dropdown-list">
				{options && options.map(this.renderOptionsList)}
			</ul>
		</div>
	);

	public handleToggle = (): void =>
		this.setState(state => ({
			...state,
			filterInput: "",
			isOpen: !state.isOpen
		}));

	public handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ filterInput: e.target.value });
	};

	public handleChange = (option: IOption) => (
		e: React.MouseEvent<HTMLElement>
	): void => {
		this.setState({
			filterInput: "",
			isOpen: false,
			selectedOption: option
		});

		if (this.props.onChange) {
			this.props.onChange(option);
		}
	};

	public render() {
		const { selectedOption, isOpen } = this.state;
		const { options } = this.props;

		return (
			<div className="kit-select-nested">
				<button
					className="kit-select-nested__label"
					type="button"
					onClick={this.handleToggle}
				>
					<div className="kit-select-nested__label-title">
						{selectedOption ? selectedOption.title : "Выбрать"}
					</div>
					<ul className="kit-select-nested__label-details-list">
						{selectedOption &&
							renderDetailsList(selectedOption.details)}
					</ul>
				</button>
				{isOpen && this.renderDropdown(options)}
			</div>
		);
	}
}
