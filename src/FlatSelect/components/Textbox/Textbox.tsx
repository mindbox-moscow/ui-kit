import classNames from "classnames";
import * as React from "react";
import { Height, InputType, Utils, Width } from "../../modules";
import { ClassDictionary, TextboxProps } from "./types";

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

	public onChange = (e: React.FormEvent<{}>) => {
		const newValue = (e.target as any).value as string;

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
			} else {
				if (!this.isValidInteger(whitespaceFreeNumber)) {
					return;
				}
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
	public _handleKeyUp = (e: React.KeyboardEvent<{}>) => {
		if (e.keyCode === 13 && this.props.onEnterFinished) {
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
		const height = this.props.height || Height.Normal;
		const width = this.props.width || Width.Normal;

		const classNamesObject: ClassDictionary = {
			"form-control": !this.props.notFormControl,
			"form-control_error":
				!Utils.Instance.getIsValid(this.context) ||
				!Utils.Instance.getIsValid(this.props)
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
			this.props.additionalClasses
		);

		const effectiveValue = this.getEffectiveValue();

		return (
			<input
				ref={this.refTextbox}
				type={InputType.Text}
				style={this.props.style}
				disabled={this.props.disabled || false}
				id={this.props.id}
				placeholder={this.props.placeholder}
				className={className}
				onChange={this.onChange}
				onKeyUp={this._handleKeyUp}
				onBlur={this.props.onBlur}
				title={this.props.title}
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
		const { value, precision } = this.props;

		if (value == null || value === "") {
			return "";
		}

		if (this.props.type === InputType.Number) {
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
				const numberValue = 0 + (value as number);
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
