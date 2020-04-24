import classNames from "classnames";
import * as React from "react";
import { Height, InputType, Width } from "../utils";
import { ClassDictionary, TextboxProps } from "./types";

type Ref = HTMLInputElement;

export const Textbox = React.forwardRef<Ref, TextboxProps>(
	(
		{
			value,
			disabled,
			style,
			id,
			placeholder,
			className,
			height = Height.Normal,
			width = Width.Normal,
			additionalClasses,
			onBlur,
			title,
			autoFocus = false,
			type,
			minValue,
			maxValue,
			onChange,
			shouldTextBeSelected,
			notFormControl,
			shouldTextBeFocused,
			precision,
			onKeyDown
		},
		ref
	) => {
		const refTextbox = ref
			? (ref as React.RefObject<HTMLInputElement>)
			: React.createRef<HTMLInputElement>();

		React.useEffect(
			() => {
				selectTextIfRequired();
				focusTextIfRequired();
			},
			[refTextbox]
		);

		const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;

			if (
				newValue != null &&
				newValue !== "" &&
				type === InputType.Number
			) {
				const whitespaceFreeNumber = newValue.replace(/\s/g, "");
				if (canBeFractional()) {
					if (!isValidDecimal(whitespaceFreeNumber)) {
						return;
					}
				} else if (!isValidInteger(whitespaceFreeNumber)) {
					return;
				}

				if (newValue !== "-" && !inputIsInProcess(newValue)) {
					const numericValue = parseFloat(whitespaceFreeNumber);

					if (isNaN(numericValue)) {
						return;
					}

					if (minValue != null && numericValue < minValue) {
						return;
					}

					if (maxValue != null && numericValue > maxValue) {
						return;
					}

					onChange(numericValue);
				} else {
					onChange(whitespaceFreeNumber);
				}
				return;
			}

			onChange(newValue);
		};

		const selectTextIfRequired = () => {
			if (shouldTextBeSelected) {
				const node = refTextbox.current;

				if (node) {
					node.select();
					node.focus();
				}
			}
		};

		const focusTextIfRequired = () => {
			if (shouldTextBeFocused) {
				focusText();
			}
		};

		const focusText = () => {
			const node = refTextbox.current;

			if (node) {
				node.focus();
			}
		};

		const canBeFractional = () => {
			return precision && precision > 0;
		};

		const isValidDecimal = (value: string) => {
			return value.match(
				new RegExp(
					`^((-\\d|-.\\d)?(\\d+\\.|\\d*)?((\\.)?\\d{1,${precision}})?)$`
				)
			);
		};

		const getEffectiveValue = () => {
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

		const classNamesObject: ClassDictionary = {
			"form-control": !notFormControl
		};

		if (width === Width.Full) {
			classNamesObject["form-control_all"] = true;
		} else {
			if (width !== null) {
				classNamesObject[String(Width.getClass(width))] = true;
			}
		}

		const isValidInteger = (value: string) => {
			return value.match(/^([+-]?\d+|0)$/g);
		};

		const inputIsInProcess = (newValue: string) => {
			return (
				newValue.endsWith(".") ||
				newValue.startsWith(".") ||
				newValue.match(/\.(0+)$/g)
			);
		};

		const effectiveValue = getEffectiveValue();

		return (
			<input
				ref={refTextbox}
				type={InputType.Text}
				style={style}
				disabled={disabled || false}
				id={id}
				placeholder={placeholder}
				className={classNames(
					classNamesObject,
					Height.getClass(height),
					additionalClasses,
					className
				)}
				onChange={handleOnChange}
				onBlur={onBlur}
				title={title}
				value={effectiveValue}
				autoFocus={autoFocus}
				onKeyDown={onKeyDown}
			/>
		);
	}
);
