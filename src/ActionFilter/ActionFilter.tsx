import * as React from "react";
import "./ActionFilter.scss";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";

interface SelectItem {
    title: string;
    disabled?: boolean;
}

interface Props {
    defaultType?: string;
    name: string;
    types: SelectItem[];
    onChangeType?: (value: SelectItem) => void;
    onChangeName?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export class ActionFilter extends React.Component<Props> {
    public render() {
        const {
            defaultType,
            types,
            name,
            children,
            onChangeType = () => {},
            onChangeName = () => {}
        } = this.props;

        return (
            <div className="action-filter">
                <div className="action-filter__content">
                    <div className="action-filter__type">
                        <div className="action-filter__title">Тип рассылки</div>
                        <Select
                            placeholder="Выберите тип"
                            defaultValue={defaultType}
                            items={types}
                            onChange={onChangeType}
                        />
                    </div>
                    <div className="action-filter__name">
                        <div className="action-filter__title">Название</div>
                        <Input defaultValue={name} onChange={onChangeName} />
                    </div>
                </div>
                <div className="action-filter__footer">
                    {React.Children.map(
                        children,
                        (item: any, index: number) => (
                            <div
                                className="action-filter__footer-inner"
                                key={index}
                            >
                                {item}
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    }
}
