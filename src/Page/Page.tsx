import * as React from "react";
import "./Page.scss";
import { Button } from "../Button/Button";
import { TextLine } from "../TextLine/TextLine";
import { Badge } from "../Badge/Badge";

interface Props {
    title: string;
    description: string;
    isPlaying?: boolean;
    cantPlaying?: boolean;
    hasBadge?: boolean;
    badgeName: string;
    badgeDate?: string;
    badgeBgColor?: string;
    onChangeTitle?: (value: string) => void;
    onChangeDescription?: (value: string) => void;
}

export class Page extends React.Component<Props> {
    state = {
        title: this.props.title,
        description: this.props.description
    };

    handleChangeTitle = (value: string) => {
        this.setState({ title: value });
        if (this.props.onChangeTitle) {
            this.props.onChangeTitle(value);
        }
    };

    handleChangeDescription = (value: string) => {
        this.setState({ description: value });
        if (this.props.onChangeDescription) {
            this.props.onChangeDescription(value);
        }
    };

    public render() {
        const {
            children,
            hasBadge,
            badgeName,
            badgeDate,
            badgeBgColor,
            isPlaying,
            cantPlaying
        } = this.props;
        const { title, description } = this.state;
        return (
            <div className="kit-page">
                <header className="kit-page__header">
                    <div className="kit-page__container">
                        <div className="kit-page__head-inner">
                            {isPlaying ? (
                                <Button
                                    className="kit-page__button"
                                    icon="pause"
                                    hasBorder
                                    color="gray"
                                    size="medium"
                                >
                                    Остановить
                                </Button>
                            ) : (
                                    <Button
                                        className="kit-page__button"
                                        icon="play"
                                        hasBorder
                                        color="gray"
                                        size="medium"
                                        disabled={cantPlaying}
                                    >
                                        Запустить
                                </Button>
                                )}
                            <Button
                                className="kit-page__button"
                                hasBorder
                                color="gray"
                                size="medium"
                            >
                                Сохранить и выйти
                            </Button>
                            <Button
                                className="kit-page__button"
                                hasBorder
                                color="gray"
                                size="medium"
                            >
                                Клонировать
                            </Button>
                            <Button
                                className="kit-page__button"
                                hasBorder
                                color="gray"
                                size="medium"
                                mode="danger"
                            >
                                Удалить
                            </Button>
                        </div>
                    </div>
                </header>
                <main className="kit-page__content">
                    <div className="kit-page__container">
                        <div className="kit-page__content-head">
                            <div className="kit-page__title">
                                <TextLine
                                    text={title}
                                    isTitle
                                    onChange={this.handleChangeTitle}
                                />
                            </div>
                            <div className="kit-page__description">
                                <TextLine
                                    text={description}
                                    onChange={this.handleChangeDescription}
                                />
                            </div>
                            {hasBadge && (
                                <div className="kit-page__tag">
                                    <Badge name={badgeName} bgColor={badgeBgColor} date={badgeDate} />
                                </div>
                            )}
                        </div>
                        {children}
                    </div>
                </main>
                <footer className="kit-page__footer" />
            </div>
        );
    }
}
