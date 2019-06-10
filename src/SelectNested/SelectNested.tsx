import * as React from "react";
import { Icon } from "../Icon";
import "./SelectNested.scss";

interface IOption {
	id: number;
	title: string;
	details: string[];
	children: IOption[] | null;
	selected: boolean;
}

interface IProps {
	options: IOption[];
	selectedOption: IOption;
	onChange?: (option: IOption) => void;
}

interface IState {
	filterInput: string;
	isOpen: boolean;
	selectedOption: IOption | null;
}

const renderDetailsList = (details: string[]): JSX.Element[] =>
	details.map((detail, i) => (
		<li className="kit-select-nested__dropdown-item-details" key={i}>
			{detail}
		</li>
	));

export class SelectNested extends React.Component<IProps, IState> {
	public state = {
		filterInput: "",
		isOpen: false,
		selectedOption: this.props.selectedOption || null
	};

	public renderDropdownList = (option: IOption): JSX.Element => {
		const { id, title, details, children } = option;

		return (
			<li className="kit-select-nested__dropdown-item" key={id}>
				<button
					className="kit-select-nested__dropdown-item-label"
					type="button"
					onClick={this.handleChange(option)}
				>
					<div className="kit-select-nested__dropdown-item-title">
						{title}
					</div>
					<ul className="kit-select-nested__dropdown-item-details-list">
						{renderDetailsList(details)}
					</ul>
				</button>
				{children && (
					<ul className="kit-select-nested__dropdown-sublist">
						{children.map(this.renderDropdownList)}
					</ul>
				)}
			</li>
		);
	};

	public handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ filterInput: e.target.value });
	};

	public handleChange = (option: IOption) => (
		e: React.MouseEvent<HTMLElement>
	) => {
		this.setState({ selectedOption: option, isOpen: false });

		if (this.props.onChange) {
			this.props.onChange(option);
		}
	};

	public render() {
		const { selectedOption } = this.state;
		const { options } = this.props;

		return (
			<div className="kit-select-nested">
				<button className="kit-select-nested__label" type="button">
					<div className="kit-select-nested__label-title">
						{selectedOption ? selectedOption.title : "Выбрать"}
					</div>
					<ul className="kit-select-nested__label-details-list">
						{selectedOption &&
							renderDetailsList(selectedOption.details)}
					</ul>
				</button>
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
						{options && options.map(this.renderDropdownList)}
					</ul>
				</div>
			</div>
		);
	}
}
