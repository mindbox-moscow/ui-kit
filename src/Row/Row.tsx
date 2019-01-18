import * as React from "react";
import "./Row.scss";
import cn from "classnames";
import { Help } from "../Help/Help";
import Trashcan from "../Trashcan/Trashcan";

interface Props {
    title?: string;
    help?: string;
    description?: string;
    isFooter?: boolean;
    children?: any;
    isText?: boolean;
    isControl?: boolean;
    isSelect?: boolean;
    isEdit?: boolean;
    isDanger?: boolean;
    isSmallFilter?: boolean;
    isFilter?: boolean;
    isAction?: boolean;
    isCustom?: boolean;
    isRemovable?: boolean;
    isSelectChecked?: boolean;
    isSelectCalendar?: boolean;
    isSelectDouble?: boolean;
    onRemove?: () => void;
}

export class Row extends React.Component<Props> {
    handleRemove = () => {
        if (this.props.onRemove) {
            this.props.onRemove();
        }
    };

    public render() {
        const {
            children,
            title,
            help,
            isEdit,
            isText,
            isControl,
            description,
            isSelect,
            isFooter,
            isDanger,
            isSmallFilter,
            isFilter,
            isAction,
            isCustom,
            isSelectChecked,
            isSelectCalendar,
            isSelectDouble,
            isRemovable
        } = this.props;

        if (isFooter) {
            return (
                <div className="kit-row__footer">
                    {React.Children.map(
                        children,
                        (item: any, index: number) => {
                            if (index !== 0) {
                                return item;
                            }
                            return <div className="kit-row__submit">{item}</div>;
                        }
                    )}
                </div>
            );
        }
        return (
            <div
                className={cn({
                    ["kit-row"]: true,
                    ["kit-row_edit"]: isEdit
                })}
            >
                <div className="kit-row__name">
                    <span className="kit-row__name-text">
                        {title}
                        {!isEdit && ":"}
                    </span>
                    {help && isEdit && (
                        <div className="kit-row__help">
                            <Help>{help}</Help>
                        </div>
                    )}
                </div>
                <div className="kit-row__content">
                    {isCustom
                        ? children
                        : React.Children.map(
                            children,
                            (item: any, index: number) => (
                                <div
                                    className={cn({
                                        "kit-row__text": isText,
                                        "kit-row__control": isControl,
                                        "kit-row__select": isSelect,
                                        "kit-row__small-filter": isSmallFilter,
                                        "kit-row__filter": isFilter,
                                        "kit-row__action": isAction,
                                        "kit-row__select-checked": isSelectChecked,
                                        "kit-row__select-calendar": isSelectCalendar,
                                        "kit-row__select-double": isSelectDouble
                                    })}
                                >
                                    {isSmallFilter ? (
                                        <div className="kit-row__filter-inner">
                                            {item}
                                        </div>
                                    ) : (
                                            item
                                        )}
                                </div>
                            )
                        )}
                    {description && (
                        <div
                            className={cn(
                                "kit-row__desc",
                                isDanger && "kit-row__desc_danger"
                            )}
                        >
                            {description}
                        </div>
                    )}
                    {isRemovable && (
                        <button
                            type="button"
                            className="kit-row__remove"
                            onClick={this.handleRemove}
                        >
                            <Trashcan />
                        </button>
                    )}
                </div>
            </div>
        );
    }
}
