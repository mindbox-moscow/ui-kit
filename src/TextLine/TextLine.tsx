import * as React from "react";
import "./TextLine.scss";
import { Icon } from "../Icon/Icon";

interface Props {
    text: string;
    isTitle?: boolean;
    isEditing?: boolean;

    /**
     * If set, makes text editable
     */
    onChange?: (value: string) => void;
}

export class TextLine extends React.Component<Props> {
    input: HTMLInputElement;
    state = {
        isEditing: false,
        value: ""
    };

    handleKeyUp = (event: any) => {
        if (event.key === "Escape") {
            this.handleExit();
        }
    };

    handleEdit = () => {
        this.setState(
            { isEditing: !this.state.isEditing, value: this.props.text },
            () => this.input.focus()
        );
        document.addEventListener("keyup", this.handleKeyUp);
    };

    handleExit = () => {
        this.setState({ isEditing: false });
        document.removeEventListener("keyup", this.handleKeyUp);
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({ value: event.target.value });

    handleInputKeyDown = (event: any) => {
        if (event.key === "Enter") {
            this.handleExit();
            if (this.props.onChange) {
                this.props.onChange(this.state.value);
            }
        }
    };

    handleInputRef = (ref: HTMLInputElement) => (this.input = ref);

    public render() {
        const { isTitle, text, onChange } = this.props;
        const { isEditing, value } = this.state;
        let Tag: any = isTitle ? "h2" : "p";

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
}
