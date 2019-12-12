import classNames from "classnames";
import * as React from "react";
import { Height, InputType, Width } from "../utils";
import { ClassDictionary, TextboxProps } from "./types";

const ENTER_KEY = 13;

export class Textbox extends React.Component<TextboxProps> {
	private refTextbox = React.createRef<HTMLInputElement>();

	public get focusText() {
		return this._focusText;
	}
	public set focusText(value) {
		this._focusText = value;
	}
	public componentDidMount() {
		this._selectTextIfRequired();
		this._focusTextIfRequired();
	}

	public componentDidUpdate() {
		this._selectTextIfRequired();
		this._focusTextIfRequired();
	}

	public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		if (
			newValue != null &&
			newValue !== "" &&
			this.props.type === InputType.Number
		) {
			const whitespaceFreeNumber = newValue.replace(/\s/g, "");
			if (this.canBeFractional()) {
				if (!this.isValidDecimal(whitespaceFreeNumber)) {
					return;
				}
			} else if (!this.isValidInteger(whitespaceFreeNumber)) {
				return;
			}

			if (newValue !== "-" && !this.inputIsInProcess(newValue)) {
				const numericValue = parseFloat(whitespaceFreeNumber);

				if (isNaN(numericValue)) {
					return;
				}

				if (
					this.props.minValue != null &&
					numericValue < this.props.minValue
				) {
					return;
				}

				if (
					this.props.maxValue != null &&
					numericValue > this.props.maxValue
				) {
					return;
				}

				this.props.onChange(numericValue);
			} else {
				this.props.onChange(whitespaceFreeNumber);
			}
			return;
		}

		this.props.onChange(newValue);
	};

	// tslint:disable-next-line: variable-name
	public _handleKeyUp = (e: React.KeyboardEvent) => {
		if (e.keyCode === ENTER_KEY && this.props.onEnterFinished) {
			this.props.onEnterFinished(this.props.value);
		}
	};

	// tslint:disable-next-line: variable-name
	public _selectTextIfRequired = () => {
		if (this.props.shouldTextBeSelected) {
			const node = this.refTextbox.current;

			if (node) {
				node.select();
				node.focus();
			}
		}
	};

	// tslint:disable-next-line: variable-name
	public _focusTextIfRequired = () => {
		if (this.props.shouldTextBeFocused) {
			this._focusText();
		}
	};

	public render() {
		const {
			width = Width.Normal,
			height = Height.Normal,
			notFormControl,
			additionalClasses,
			style,
			disabled,
			id,
			placeholder,
			onBlur,
			title
		} = this.props;

		const classNamesObject: ClassDictionary = {
			"form-control": !notFormControl,
			"form-control_error": !this.context || !this.props
		};

		if (width === Width.Full) {
			classNamesObject["form-control_all"] = true;
		} else {
			if (width !== null) {
				classNamesObject[String(Width.getClass(width))] = true;
			}
		}

		const className = classNames(
			classNamesObject,
			Height.getClass(height),
			additionalClasses
		);

		const effectiveValue = this.getEffectiveValue();

		return (
			<input
				ref={this.refTextbox}
				type={InputType.Text}
				style={style}
				disabled={disabled || false}
				id={id}
				placeholder={placeholder}
				className={className}
				onChange={this.onChange}
				onKeyUp={this._handleKeyUp}
				onBlur={onBlur}
				title={title}
				value={effectiveValue}
			/>
		);
	}

	// tslint:disable-next-line: variable-name
	private _focusText = () => {
		const node = this.refTextbox.current;

		if (node) {
			node.focus();
		}
	};

	private canBeFractional = () => {
		const { precision } = this.props;

		return precision && precision > 0;
	};

	private isValidDecimal(value: string) {
		return value.match(
			new RegExp(
				`^((-\\d|-.\\d)?(\\d+\\.|\\d*)?((\\.)?\\d{1,${
					this.props.precision
				}})?)$`
			)
		);
	}

	private isValidInteger(value: string) {
		return value.match(/^([+-]?\d+|0)$/g);
	}

	private inputIsInProcess = (newValue: any) => {
		return (
			newValue.endsWith(".") ||
			newValue.startsWith(".") ||
			newValue.match(/\.(0+)$/g)
		);
	};

	private getEffectiveValue = () => {
		const { value, precision, type } = this.props;

		if (value == null || value === "") {
			return "";
		}

		if (type === InputType.Number) {
			if (value === "-") {
				return "-";
			}

			if (
				value.toString().endsWith(".") ||
				value.toString().match(/\.(0+)$/g)
			) {
				return value.toString();
			}

			if (value.toString().startsWith(".")) {
				return value
					.toString()
					.substring(0, 1 + (precision ? precision : 0));
			}

			if (typeof value === "number") {
				const numberValue = 0 + value;
				return new Intl.NumberFormat("ru-RU", {
					minimumFractionDigits: 0,
					// tslint:disable-next-line: object-literal-sort-keys
					maximumFractionDigits: precision
				})
					.format(numberValue)
					.replace(/,/g, ".");
			}
		}

		return value == null ? "" : value.toString();
	};
}
