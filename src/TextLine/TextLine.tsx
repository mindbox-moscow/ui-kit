import * as React from "react";
import "./TextLine.scss";
import { Icon } from "../Icon/Icon";

interface Props {
    text: string;
    isTitle?: boolean;
    isEditing?: boolean;
    onChange?: (value: string) => void;
}

export class TextLine extends React.Component<Props> {
    input: HTMLInputElement;
    state = {
        isEditing: false,
        value: ""
    };

    handleEdit = () =>
        this.setState(
            { isEditing: !this.state.isEditing, value: this.props.text },
            () => this.input.focus()
        );

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({ value: event.target.value });

    handleKeyPress = (event: any) => {
        if (event.key === "Enter") {
            this.setState({ isEditing: false });
            if (this.props.onChange) {
                this.props.onChange(this.state.value);
            }
        }
    };

    handleInputRef = (ref: HTMLInputElement) => (this.input = ref);

    public render() {
        const { isTitle, text } = this.props;
        const { isEditing, value } = this.state;
        let Tag: any = isTitle ? "h2" : "p";

        return (
            <div className="textLine">
                {isEditing ? (
                    <div className="textLine__input-box">
                        <input
                            ref={this.handleInputRef}
                            className="textLine__input"
                            type="text"
                            value={value}
                            onChange={this.handleChange}
                            onKeyUp={this.handleKeyPress}
                        />
                        <span className="textLine__signature">
                            Сохранить: нажмите Enter
                        </span>
                    </div>
                ) : (
                    <Tag
                        className={
                            isTitle
                                ? "textLine__title"
                                : "textLine__description"
                        }
                    >
                        {text}
                        <button
                            className="textLine__button"
                            type="button"
                            onClick={this.handleEdit}
                        >
                            <Icon icon="edit" />
                        </button>
                    </Tag>
                )}
            </div>
        );
    }
}
