import * as React from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import "./SelectNested.scss";

import cn from "classnames";

interface IOption {
	id: number;
	title: string;
	details: string[];
	children?: IOption[];
	disabled?: boolean;
}

interface IProps {
	options: IOption[];
	submitBtnText: string;
	cancelBtnText: string;
	showSubgroupBtnText: string;
	selectedOption?: IOption;
	onChange?: (option: IOption) => void;
	className?: string;
}

interface IState {
	filter: string;
	isOpen: boolean;
	selectedOption: IOption | null;
	markedOption: IOption | null;
}

const renderDetailsList = (details: string[]): JSX.Element[] =>
	details.map((detail, i) => (
		<li className="kit-select-nested__dropdown-option-details" key={i}>
			{detail}
		</li>
	));

export class SelectNested extends React.PureComponent<IProps, IState> {
	public state = {
		filter: "",
		isOpen: false,
		selectedOption: this.props.selectedOption || null,
		markedOption: this.props.selectedOption || null
	};

	public wrapRef = React.createRef<HTMLFormElement>();

	public renderOption = (option: IOption): JSX.Element => {
		const { id, title, details, children, disabled } = option;
		const { filter } = this.state;
		const isOutOfFilter = title.toLowerCase().indexOf(filter) === -1;

		return (
			<li
				className={cn(
					"kit-select-nested__dropdown-option",
					filter && "kit-select-nested__dropdown-option_show_sublist"
				)}
				key={id}
			>
				<button
					className={cn("kit-select-nested__dropdown-option-label", {
						"kit-select-nested__dropdown-option-label_disabled":
							disabled || isOutOfFilter
					})}
					type="button"
					disabled={disabled || isOutOfFilter}
					onClick={this.markOption(option)}
				>
					<div className="kit-select-nested__dropdown-option-title">
						{title}
					</div>
					<ul className="kit-select-nested__dropdown-option-details-list">
						{renderDetailsList(details)}
					</ul>
				</button>
				{children && (
					<>
						<button
							className="kit-select-nested__dropdown-option-sublist-toggle"
							type="button"
							aria-label={this.props.showSubgroupBtnText}
						/>
						<ul className="kit-select-nested__dropdown-sublist">
							{children.map(this.renderOption)}
						</ul>
					</>
				)}
			</li>
		);
	};

	public renderDropdownList = (options: IOption[]): JSX.Element => (
		<div className="kit-select-nested__dropdown">
			<div className="kit-select-nested__filter">
				<div className="kit-select-nested__filter-input-wrap">
					<input
						type="search"
						className="kit-select-nested__filter-input"
						onChange={this.handleFilter}
					/>
					<span className="kit-select-nested__filter-icon">
						<Icon icon="search" />
					</span>
				</div>
			</div>
			<div className="kit-select-nested__dropdown-list-wrap">
				<ul className="kit-select-nested__dropdown-list">
					{options && options.map(this.renderOption)}
				</ul>
			</div>
		</div>
	);

	public renderDropdown = (options: IOption[]): JSX.Element => (
		<div className="kit-select-nested__dropdown-wrap">
			{this.renderDropdownList(options)}
			<div className="kit-select-nested__dropdown-footer">
				<Button
					className="kit-select-nested__dropdown-footer-submit"
					type="submit"
					color="gray"
					size="medium"
					hasBorder={true}
				>
					{this.props.submitBtnText}
				</Button>
				<Button
					className="kit-select-nested__dropdown-footer-reset"
					type="reset"
					mode="simple_text"
					color="gray"
					size="medium"
					onClick={this.handleToggle}
				>
					{this.props.cancelBtnText}
				</Button>
			</div>
		</div>
	);

	public handleToggle = (): void =>
		this.setState(state => ({
			...state,
			filter: "",
			isOpen: !state.isOpen
		}));

	public handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ filter: e.target.value });
	};

	public handleWrapRefClick = (e: MouseEvent): void => {
		const isSublistToggle = (e.target as HTMLElement).classList.contains(
			"kit-select-nested__dropdown-option-sublist-toggle"
		);

		if (isSublistToggle) {
			(e.target as HTMLElement).parentElement!.classList.toggle(
				"kit-select-nested__dropdown-option_show_sublist"
			);
		}
	};

	public handleClickOutside = (e: MouseEvent) => {
		const wrap = this.wrapRef.current!;

		if (!wrap.contains(e.target as Node)) {
			this.setState({ isOpen: false, filter: "" });
		}
	};

	public markOption = (option: IOption) => (
		e: React.MouseEvent<HTMLButtonElement>
	): void => {
		this.setState({ markedOption: option });
	};

	public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { onChange } = this.props;
		const { markedOption } = this.state;

		if (onChange && markedOption) {
			onChange(markedOption!);
		}

		this.setState({
			filter: "",
			isOpen: false,
			selectedOption: markedOption,
			markedOption: null
		});
	};

	public componentDidMount() {
		this.wrapRef.current!.addEventListener(
			"click",
			this.handleWrapRefClick
		);
		document.addEventListener("click", this.handleClickOutside);
	}

	public componentWillUnmount() {
		this.wrapRef.current!.removeEventListener(
			"click",
			this.handleWrapRefClick
		);
		document.removeEventListener("click", this.handleClickOutside);
	}

	public render() {
		const { options } = this.props;
		const { selectedOption, isOpen } = this.state;

		return (
			<form
				className={cn(
					"kit-select-nested",
					isOpen && "kit-select-nested_show_dropdown"
				)}
				ref={this.wrapRef}
				onSubmit={this.handleSubmit}
			>
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
			</form>
		);
	}
}
