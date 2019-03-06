import * as React from "react";
import "./Tabs.scss";

import { Tab } from '../Tab/Tab';
import { Module } from '../Module/Module';

interface Props {
    dataTabsContent: any,
    dataTabs: any,
}

const renderModule = (item: any) => {
    return (
        <div key={item.name} className="kit-tabs__module">
            <Module name={item.name} signature={item.signature} price={item.price}>
                {item.text}
            </Module>
        </div>
    );
}

export class Tabs extends React.Component<Props> {
    state = {
        value: 'CDP'
    };

    handleChange = (value: any) => {
        this.setState({ value: value });
    };

    renderTab = (item: any) => {
        const { value } = this.state;
        return (
            <li key={item.value} className={"kit-tabs__item"}>
                <Tab
                    onClick={this.handleChange}
                    value={item.value}
                    isSelected={value === item.value}
                >
                    {item.text}
                </Tab>
            </li>
        );
    }

    renderTabsContent = (key: string, daraArr: any) => {
        switch (key) {
            case 'CDP':
                return (<div className="kit-tabs__tabs-content">
                    {daraArr.CDP.map(renderModule)}
                </div>);

            case 'Newsletters':
                return (<div className="kit-tabs__tabs-content">
                    {daraArr.Newsletters.map(renderModule)}
                </div>);

            case 'Loyalty':
                return (<div className="kit-tabs__tabs-content">
                    {daraArr.Loyalty.map(renderModule)}
                </div>);

            case 'Personalization':
                return (<div className="kit-tabs__tabs-content">
                    {daraArr.Personalization.map(renderModule)}
                </div>);

            default:
                return null;
        }
    }

    public render() {
        const { value } = this.state;
        const { dataTabs, dataTabsContent } = this.props;
        return (
            <section className="kit-tabs">
                <div className="kit-tabs__header">
                    <h1 className="kit-tabs__title">Модули, доступные для подключения</h1>
                    <ul className={"kit-tabs__list"}>
                        {dataTabs.map(this.renderTab)}
                    </ul>
                </div>
                {this.renderTabsContent(value, dataTabsContent)}
            </section>
        );
    }
}
