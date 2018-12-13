import * as React from "react";
import './Row.scss'
import cn from 'classnames'

interface Props {
    title?: string;
    description?: string;
    isFooter?: boolean;
    children?: any;
    isText?: boolean;
    isControl?: boolean;
    isControlWhithFilter?: boolean;
    isSelect?: boolean;
    isEdit?: boolean;
    isDanger?: boolean;
    isSmallFilter?: boolean;
    isFilter?: boolean;
    isAction?: boolean;
}

export class Row extends React.Component<Props> {
    public render() {
        const {
            children,
            title,
            isEdit,
            isText,
            isControl,
            isControlWhithFilter,
            description,
            isSelect,
            isFooter,
            isDanger,
            isSmallFilter,
            isFilter,
            isAction
        } = this.props;

        if (isFooter) {
            return (
                <div className='row__footer'>
                    {
                        React.Children.map(children, (item: any, index: number) => {
                            if (index !== 0) {
                                return item;
                            }
                            return (
                                <div className='row__submit'>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            );
        }
        return (
            <div className={cn(
                {
                    ['row']: true,
                    ['row_edit']: isEdit
                }
            )}>
                <div className='row__name'>
                    <span className='row__name-text'>{title}{!isEdit && ':'}</span>
                </div>
                <div className='row__content'>
                    {
                        React.Children.map(children, (item: any, index: number) => (
                            <>
                                <div className={cn({
                                    'row__text': isText,
                                    'row__control': isControl || (isControlWhithFilter && index !== children.length - 1),
                                    'row__select': isSelect,
                                    'row__small-filter': isSmallFilter || (isControlWhithFilter && index === children.length - 1),
                                    'row__control-filter': isControlWhithFilter,
                                    'row__filter': isFilter,
                                    'row__action': isAction,
                                })}>
                                    {
                                        isSmallFilter || (isControlWhithFilter && index === children.length - 1)
                                            ? <div className='row__filter-inner'>{item}</div>
                                            : item
                                    }
                                </div>
                            </>
                        ))
                    }
                    {description && (
                        <div className={cn('row__desc', isDanger && 'row__desc_danger')}>
                            {description}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
