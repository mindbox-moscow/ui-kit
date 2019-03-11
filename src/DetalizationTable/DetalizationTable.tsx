import * as React from "react";
import { Table } from "../Table/Table";
import { Button } from "../Button/Button";
import { Help } from "../Help/Help";
import { QuantityBlock } from "../QuantityBlock/QuantityBlock";
import { DetalizationList } from "../DetalizationList/DetalizationList";
import { DetalizationTotal } from "../DetalizationTotal/DetalizationTotal";
import "./DetalizationTable.scss";

const data = [{
    name: "Email-рассылки",
    description: "Массовые, триггерные, транзакционные email-рассылки, включая шлюз без ограничения трафика",
    firstValue: "25%",
    secondValue: "28 000",
    newPrice: "24 000",
    signature: "с учетом скидки 13%"
},
{
    name: "Рекомендации на сайте",
    description: "Ручные и автоматические алгоритмы товарных рекомендаций на сайте, виджет для сайта",
    firstValue: "20%",
    secondValue: "4 000"
}
];

const data2 = [{
    name: "Хранение потребителей",
    description: "До 1 млн потребителей бесплатно, хранение потребителей сверх этого лимита оплачивается отдельно",
    firstValue: "0",
    secondValue: "0",
},
{
    name: "Хранение действий",
    description: "До 100 млн действий бесплатно, хранение действий сверх этого лимита оплачивается отдельно",
    firstValue: "25 900 415",
    secondValue: "8 500"
},
{
    name: "Хранение сегментов",
    description: "До 100 млн сегментов бесплатно, хранение сегментов сверх этого лимита оплачивается отдельно",
    firstValue: "0",
    secondValue: "0"
},
{
    name: "Хранение заказов",
    description: "До 10 млн заказов бесплатно, хранение заказов сверх этого лимита оплачивается отдельно",
    firstValue: "51 301",
    secondValue: "12 300"
},
{
    name: "Хранение учетных записей",
    description: "До 20 учетных записей бесплатно, хранение учетных записей сверх этого лимита оплачивается отдельно",
    firstValue: "25",
    secondValue: "6 000"
}
];

const rows = [
    {
        name: "Доплата за прошлый месяц",
        value: "15 000",
    },
    {
        name: "Аванс на текущий месяц",
        value: "132 000",
    },
    {
        name: "Доплата аванса за текущий месяц",
        value: "10 000",
    },
    {
        name: "Скидка в договоре (15%, действует до 1 марта 2019)",
        value: "-32 000",
    },
    {
        name: "Итого без НДС",
        value: "108 000",
    },
    {
        name: "НДС",
        value: "20 160",
    },
];

const detailsRows = [
    {
        name: "Схема оплаты",
        value: "авансовая",
    },
    {
        name: "Срок оплаты",
        value: "до 20 февраля 2018",
    },
    {
        name: "Повышение на инфляцию",
        value: "1,5%",
    },
    {
        name: "Режим хранения",
        value: "макс. за месяц",
        icon: true,
    }
]

const detailsRows2 = [
    {
        name: "Версия тарифа",
        value: "1.6",
    },
    {
        name: "Последняя версия тарифа",
        value: "2.1",
    }
]

const statistics = [
    {
        name: "потребителей",
        value: "917 496",
    },
    {
        name: "действий",
        value: "125 900 415",
    },
    {
        name: "сегментов",
        value: "57 115 209",
    },
    {
        name: "заказов",
        value: "105 200 467",
    },
    {
        name: "учетных записей",
        value: "45",
    },
]

const renderQuanityBlock = (item: any) => {
    return (
        <div key={item.name} className="kit-detalization__statistics-item">
            <QuantityBlock value={item.value} name={item.name} />
        </div>
    );
}

const renderDetailsRow = (item: any) => {
    return (
        <li key={item.name} className="kit-detalization__details-row">
            <span>{`${item.name}:`}</span>
            <span className="kit-detalization__details-value">{item.value}</span>
            {item.icon && <Help className="kit-detalization__details-help" />}
        </li>
    );
}

export class DetalizationTable extends React.Component<{}> {
    public render() {
        return (
            <div className="kit-detalization">
                <div className="kit-detalization__left-content">
                    <div className="kit-detalization__table">
                        <div className="kit-detalization__table-header">
                            <span>Услуга</span>
                            <span>Стоимость, руб.</span>
                        </div>
                        <div className="kit-detalization__table-row">
                            <div className="detalization__table-col">
                                <div className="kit-detalization__table-name">Базовый модуль</div>
                                <div className="kit-detalization__table-signature">
                                    Стоимость базового модуля зависит от количества потребителей
                                </div>
                            </div>
                            <span>80 000</span>
                        </div>
                    </div>
                    <Table className="kit-detalization__yellow-table" th1="Дополнительные модули" th2="Стоимость в % от базового модуля" rows={data} />
                    <Table className="kit-detalization__yellow-table" th1="хранение данных" th2="Данные сверх лимита" rows={data2} />
                    <DetalizationList className="kit-detalization__rows" rows={rows} />
                    <DetalizationTotal className="kit-detalization__total-box" name="Итого с НДС" result="132 1460" />
                </div>
                <div className="kit-detalization__right-content">
                    <div className="kit-detalization__details">
                        {detailsRows.map(renderDetailsRow)}
                    </div>
                    <div className="kit-detalization__details">
                        {detailsRows2.map(renderDetailsRow)}
                        <Button
                            className="kit-detalization__button"
                            size="medium"
                            color="gray"
                            hasBorder
                        >
                            Пересчитать по новому тарифу
                        </Button>
                    </div>
                    <div className="kit-detalization__statistics">
                        <h3 className="kit-detalization__statistics-title">В ВАШЕМ АККАУНТЕ:</h3>
                        {statistics.map(renderQuanityBlock)}
                    </div>
                </div>
            </div>
        );
    }
}
