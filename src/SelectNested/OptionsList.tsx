import * as React from "react";

import cn from "classnames";

type OnClick = (option: IOption) => (e: React.MouseEvent<HTMLElement>) => void;

export interface IOption {
	id: number;
	title: string;
	details: string[];
	children: IOption[] | null;
	disabled?: boolean;
}

interface IProps {
	option: IOption;
	filter: string;
	onClick: OnClick;
}

interface IState {
	showSublist: boolean;
}

const renderDetailsList = (details: string[]): JSX.Element[] =>
	details.map((detail, i) => (
		<li className="kit-select-nested__dropdown-option-details" key={i}>
			{detail}
		</li>
	));

const renderOptionsList = (
	filter: string,
	onClick: OnClick,
	option: IOption
): JSX.Element => {
	const { title, details, children, disabled } = option;
	const isOutOfFilter = title.toLowerCase().indexOf(filter) === -1;

	return (
		<li
			className={cn(
				"kit-select-nested__dropdown-option",
				children && "kit-select-nested__dropdown-option_has_sublist"
			)}
		>
			{children && (
				<button className="kit-select-nested__dropdown-option-sublist-toggle">
					<span className="kit-select-nested__dropdown-option-sublist-toggle-title">
						Показать подгруппы
					</span>
				</button>
			)}
			<button
				className="kit-select-nested__dropdown-option-label"
				type="button"
				onClick={onClick(option)}
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
					{children.map(
						renderOptionsList.bind(null, filter, onClick)
					)}
				</ul>
			)}
		</li>
	);
};

export class OptionsList extends React.PureComponent<IProps, IState> {
	public state = {
		showSublist: false
	};

	public render() {
		const { filter, onClick, option } = this.props;

		return renderOptionsList(filter, onClick, option);
	}
}
