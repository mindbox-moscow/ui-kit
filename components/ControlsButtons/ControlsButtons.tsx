import * as React from "react";
import './ControlsButtons.scss'
import { Btn } from '../Btn/Btn';
// import cn from 'classnames';

interface Props {
    text?: string;
}

export class ControlsButtons extends React.Component<Props> {
    public render() {
        return (
            <div className="controls">
                <Btn className="controls__button" icon="play" hasBorder isDisabled color="gray" size="medium">Запустить</Btn>
                <Btn className="controls__button" hasBorder color="gray" size="medium">Сохранить и выйти</Btn>
                <Btn className="controls__button" hasBorder color="gray" size="medium">Клонировать</Btn>
                <Btn className="controls__button" hasBorder color="gray" size="medium" mode="danger">Удалить</Btn>
            </div>
        );
    }
}