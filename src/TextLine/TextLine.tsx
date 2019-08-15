import cn from "classnames";
import * as React from "react";

import { Icon } from "../Icon/Icon";

import "./TextLine.scss";

interface IProps {
	text: string;
	isTitle?: boolean;
	isEditing?: boolean;
	invalid?: boolean;
	onChange?: (value: string) => boolean | void;
}

interface IState {
	isEditing: boolean;
	invalid: boolean;
	value: string;
}

export class TextLine extends React.Component<IProps, IState> {
	public input: HTMLInputElement;
	public state = {
		isEditing: (this.props.onChange && this.props.isEditing) || false,
		invalid: this.props.invalid || false,
		value: this.props.text
	};

	public handleKeyUp = ({ key }: KeyboardEvent): void => {
		if (key === "Escape") {
			this.handleExit();
		}
	};

	public setFocusToInput = (): void => this.input.focus();

	public handleEdit = (): void => {
		this.setState({ isEditing: true }, this.setFocusToInput);
		document.addEventListener("keyup", this.handleKeyUp);
	};

	public handleExit = (newValue?: string): void => {
		this.setState({
			isEditing: false,
			invalid: false,
			value: newValue || this.props.text
		});
		document.removeEventListener("keyup", this.handleKeyUp);
	};

	public handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
		this.setState({ value: target.value });

	public handleInputKeyDown = ({ key }: React.KeyboardEvent): void => {
		if (key === "Enter") {
			const { onChange } = this.props;
			const { value } = this.state;

			if (onChange) {
				const valid = onChange(value);

				if (valid !== false) {
					this.handleExit(value);
				} else {
					this.setState({ invalid: true });
				}
			}
		}
	};

	public handleInputRef = (ref: HTMLInputElement) => (this.input = ref);

	public componentDidMount() {
		if (this.state.isEditing) {
			document.addEventListener("keyup", this.handleKeyUp);
		}
	}

	public componentWillUnmount() {
		document.removeEventListener("keyup", this.handleKeyUp);
	}

	public render() {
		const { isTitle, onChange } = this.props;
		const { isEditing, value, invalid } = this.state;
		const Tag: keyof JSX.IntrinsicElements = isTitle ? "h2" : "p";

		return (
			<div className="kit-textLine">
				{isEditing ? (
					<div
						className={cn(
							"kit-textLine__input-box",
							invalid && "kit-textLine__input-box_invalid"
						)}
					>
						<input
							ref={this.handleInputRef}
							className="kit-textLine__input"
							type="text"
							value={value}
							onChange={this.handleChange}
							onKeyDown={this.handleInputKeyDown}
						/>
						<span className="kit-textLine__signature">
							Сохранить: нажмите Enter
						</span>
					</div>
				) : (
					<Tag
						className={
							isTitle
								? "kit-textLine__title"
								: "kit-textLine__description"
						}
					>
						{value}
						{onChange && (
							<button
								className="kit-textLine__button"
								type="button"
								onClick={this.handleEdit}
							>
								<Icon icon="edit" />
							</button>
						)}
					</Tag>
				)}
			</div>
		);
	}
}
