import * as React from "react";
import './ControlsButtons.scss'
import { Button } from '../Button/Button';

interface Props {
    text?: string;
}

export class ControlsButtons extends React.Component<Props> {
    public render() {
        return (
            <div className="controls">
                <Button className="controls__button" icon="play" hasBorder disabled color="gray" size="medium">Запустить</Button>
                <Button className="controls__button" hasBorder color="gray" size="medium">Сохранить и выйти</Button>
                <Button className="controls__button" hasBorder color="gray" size="medium">Клонировать</Button>
                <Button className="controls__button" hasBorder color="gray" size="medium" mode="danger">Удалить</Button>
            </div>
        );
    }
}