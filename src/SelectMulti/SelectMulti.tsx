import * as React from "react";
import "./SelectMulti.scss";

import cn from "classnames";

interface IOption {
	title: string;
	value: string;
	checked?: boolean;
	disabled?: boolean;
}

interface ITextKeys {
	all: string;
	except: string;
	and: string;
}

interface IProps {
	options: IOption[];
	name: string;
	placeholder?: string;
	onChange?: (options: IOption[]) => void;
	className?: string;
	textKeys?: ITextKeys;
}

interface IState {
	isOpen: boolean;
	selectedOptions: IOption[];
}

export class SelectMulti extends React.PureComponent<IProps, IState> {
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
			<li
				className={cn(
					"kit-select-multi__dropdown-option",
					checked && "kit-select-multi__dropdown-option_checked",
					disabled && "kit-select-multi__dropdown-option_disabled"
				)}
				key={value}
			>
				<label className="kit-select-multi__dropdown-option-label">
					<input
						className="kit-select-multi__dropdown-option-input"
						type="checkbox"
						name={name}
						onChange={this.handleChange(option)}
						checked={checked}
						disabled={disabled}
					/>
					<span className="kit-select-multi__dropdown-option-label-title">
						{title}
					</span>
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

	public handleClickOutside = (e: MouseEvent) => {
		const wrap = this.wrapRef.current!;

		if (!wrap.contains(e.target as Node)) {
			this.setState({ isOpen: false });
		}
	};

	public getSelectedOptionsText = () => {
		const { options, textKeys, placeholder } = this.props;
		const { selectedOptions } = this.state;

		if (textKeys) {
			if (selectedOptions.length + 1 === options.length) {
				const except = options.find(
					({ value }) =>
						!selectedOptions.some(opt => opt.value === value)
				);

				return `${textKeys.all} ${textKeys.except} ${except!.title}`;
			}

			if (selectedOptions.length + 2 === options.length) {
				const [except1, except2] = options.filter(
					({ value }) =>
						!selectedOptions.some(opt => opt.value === value)
				);

				return `${textKeys.all} ${textKeys.except} ${except1.title} ${
					textKeys.and
				} ${except2.title}`;
			}
		}

		return selectedOptions.length === 0 ||
			selectedOptions.length === options.length
			? placeholder
			: selectedOptions.map(opt => opt.title).join("; ");
	};

	public componentDidMount() {
		document.addEventListener("click", this.handleClickOutside);
	}

	public componentWillUnmount() {
		document.removeEventListener("click", this.handleClickOutside);
	}

	public render() {
		const { options } = this.props;
		const { isOpen } = this.state;

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
						{this.getSelectedOptionsText()}
					</div>
				</button>
				{isOpen && this.renderDropdownList(options)}
			</div>
		);
	}
}
