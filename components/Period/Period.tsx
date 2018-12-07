import * as React from "react";
import './Period.scss';
import cn from 'classnames';

interface Item {
    title: string;
    name?: string;
    isChecked?: boolean;
}

interface Props {
    items: Item[];
    theme?: string;
}

export class Period extends React.Component<Props> {
    public render() {
        const { items, theme } = this.props
        return (
            <div
                className={cn('period', {
                    [`period_theme_${theme}`]: theme
                })}
            >
                {items.map(({ name, title, isChecked }, index) => (
                    <label className='period__item' key={index}>
                        <input
                            className='period__input'
                            type='checkbox'
                            name={name}
                            defaultChecked={isChecked || false}
                        />
                        <div className='period__title'>
                            {title}
                        </div>
                    </label>
                ))}
            </div>
        );
    }
}