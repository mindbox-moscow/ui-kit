import * as React from "react";
import "./TextLine.scss";
import { Icon } from "../Icon/Icon";

interface Props {
    text: string;
    isTitle?: boolean;

    /**
     * If set, makes text editable
     */
    onChange?: (value: string) => void;
}

interface State {
	isEditing?: boolean;
	value: string;
}

export class TextLine extends React.Component<Props, State> {
    public input: HTMLInputElement;

    public state = {
        isEditing: false,
        value: ""
    };

    public render() {
        const { isTitle, text, onChange } = this.props;
        const { isEditing, value } = this.state;
        const Tag: any = isTitle ? "h2" : "p";

        return (
            <div className="kit-textLine">
                {isEditing ? (
                    <div className="kit-textLine__input-box">
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
                        {text}
                        {onChange == null ? null : (
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

	private handleKeyUp = (event: any) => {
		if (event.key === "Escape") {
			this.handleExit();
		}
	};

	private handleEdit = () => {
		this.setState(
			{ isEditing: !this.state.isEditing, value: this.props.text },
			() => this.input.focus()
		);
		document.addEventListener("keyup", this.handleKeyUp);
	};

	private handleExit = () => {
		this.setState({ isEditing: false });
		document.removeEventListener("keyup", this.handleKeyUp);
	};

	private handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		this.setState({ value: event.target.value });

	private handleInputKeyDown = (event: any) => {
		if (event.key === "Enter") {
			this.handleExit();
			if (this.props.onChange) {
				this.props.onChange(this.state.value);
			}
		}
	};

	private handleInputRef = (ref: HTMLInputElement) => (this.input = ref);
}
