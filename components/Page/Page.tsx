import * as React from "react";
import './Page.scss'
import { Button } from "../Button/Button";
import { TextLine } from "../TextLine/TextLine";
import { Tag } from "../Tag/Tag";

interface Props {
    children: any;
    title: string;
    description: string;
    isPlaying?: boolean;
    cantPlaying?: boolean;
    hasTag?: boolean;
    isDevelop?: boolean;
    tagDate?: string;
    onChangeTitle?: (value: string) => void;
    onChangeDescription?: (value: string) => void;
}

export class Page extends React.Component<Props> {
    state = {
        title: this.props.title,
        description: this.props.description
    }

    handleChangeTitle = (value: string) => {
        this.setState({ title: value });
        if (this.props.onChangeTitle) {
            this.props.onChangeTitle(value);
        }
    }

    handleChangeDescription = (value: string) => {
        this.setState({ description: value });
        if (this.props.onChangeDescription) {
            this.props.onChangeDescription(value);
        }
    }

    public render() {
        const { children, tagDate, isDevelop, hasTag, isPlaying, cantPlaying } = this.props;
        const { title, description } = this.state;
        return (
            <div className='page'>
                <header className='page__header'>
                    <div className='page__container'>
                        <div className='page__head-inner'>
                            {
                                isPlaying ? (
                                    <Button
                                        className='page__button'
                                        icon='pause'
                                        hasBorder
                                        color='gray'
                                        size='medium'
                                    >
                                        Остановить
                                    </Button>
                                ) : (
                                    <Button
                                        className='page__button'
                                        icon='play'
                                        hasBorder
                                        color='gray'
                                        size='medium'
                                        disabled={cantPlaying}
                                    >
                                        Запустить
                                    </Button>
                                )
                            }
                            <Button className='page__button' hasBorder color="gray" size="medium">Сохранить и выйти</Button>
                            <Button className='page__button' hasBorder color="gray" size="medium">Клонировать</Button>
                            <Button className='page__button' hasBorder color="gray" size="medium" mode="danger">Удалить</Button>
                        </div>
                    </div>
                </header>
                <main className='page__content'>
                    <div className='page__container'>
                        <div className='page__content-head'>
                            <div className='page__title'>
                                <TextLine text={title} isTitle onChange={this.handleChangeTitle} />
                            </div>
                            <div className='page__description'>
                                <TextLine text={description} onChange={this.handleChangeDescription} />
                            </div>
                            {
                                hasTag && (
                                    <div className='page__tag'>
                                        <Tag isDevelop={isDevelop} date={tagDate} />
                                    </div>
                                )
                            }
                        </div>
                        {children}
                    </div>
                </main>
                <footer className='main-page__footer'></footer>
            </div>
        );
    }
}
