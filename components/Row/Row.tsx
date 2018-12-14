import * as React from "react";
import './Row.scss'
import cn from 'classnames'
import { Icon } from '../Icon/Icon'
import { Help } from '../Help/Help'

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
    }

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
                    <span className='row__name-text'>
                        {title}
                        {!isEdit && ':'}
                    </span>
                    {help && isEdit && (
                        <div className='row__help'>
                            <Help>
                                {help}
                            </Help>
                        </div>
                    )}
                </div>
                <div className='row__content'>
                    {
                        isCustom
                            ? children
                            : React.Children.map(children, (item: any, index: number) => (
                                <div className={cn({
                                    'row__text': isText,
                                    'row__control': isControl,
                                    'row__select': isSelect,
                                    'row__small-filter': isSmallFilter,
                                    'row__filter': isFilter,
                                    'row__action': isAction,
                                    'row__select-checked': isSelectChecked,
                                    'row__select-calendar': isSelectCalendar,
                                    'row__select-double': isSelectDouble,
                                    
                                })}>
                                    {
                                        isSmallFilter
                                            ? <div className='row__filter-inner'>{item}</div>
                                            : item
                                    }
                                </div>
                            ))
                    }
                    {description && (
                        <div className={cn('row__desc', isDanger && 'row__desc_danger')}>
                            {description}
                        </div>
                    )}
                    {isRemovable &&
                        <button type='button' className='row__remove' onClick={this.handleRemove}>
                            <Icon icon='remove' />
                        </button>
                    }
                </div>
            </div>
        );
    }
}
