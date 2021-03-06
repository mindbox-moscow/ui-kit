import * as React from "react";
import "./Tag.scss";

import cn from "classnames";

interface Props {
    date?: string;
    /**
     * Режим девелопа. При включении отображает состояние "в разработке".
     */
    isDevelop?: boolean;
}

export class Tag extends React.Component<Props> {
    public render() {
        const { isDevelop, date } = this.props;
        return (
            <div className={cn("kit-tag", { tag_develop: isDevelop })}>
                {isDevelop ? (
                    <span>Триггер в разработке</span>
                ) : (
                        <div>
                            <span className="kit-tag__text">Триггер активен</span>
                            Запущен: <span className="kit-tag__date">{date}</span>
                        </div>
                    )}
            </div>
        );
    }
}
