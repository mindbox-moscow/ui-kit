import * as React from "react";
import * as ReactDOM from "react-dom";

import { DetalizationHeader } from "../src/DetalizationHeader/DetalizationHeader";
import { DetalizationContent } from "../src/DetalizationContent/DetalizationContent";
import { Tabs } from "../src/Tabs/Tabs"

const dataTab = [
    {
        value: "CDP",
        text: "CDP",
    },
    {
        value: "Newsletters",
        text: "Рассылки",
    },
    {
        value: "Loyalty",
        text: "Лояльность",
    },
    {
        value: "Personalization",
        text: "Персонализация сайта",
    }
];

const dataModule = {
    CDP: [
        {
            name: "Мультибренд",
            signature: "20% от стоимости базового модуля",
            price: "8 000",
            text: "Несколько БД в одной: права доступа, подписка и отписка, отправители СМС, разделение отчетности, кросс-бренд коммуникации. Общие модули, единый биллинг"
        },
        {
            name: "Webhooks / In-App",
            signature: "25% от стоимости базового модуля",
            price: "12 500",
            text: "Рассылки HTTP запросов по событиям (In-App, колл-центр, другие системы)"
        },
        {
            name: "Алгоритм: Рекомендации по API",
            signature: "10% от стоимости базового модуля",
            price: "4 000",
            text: "Ручные и автоматические алготитмы товарных рекомендаций по API Mindbox"
        },
        {
            name: "Алгоритм: Предсказание оттока",
            signature: "15% от стоимости базового модуля",
            price: "6 000",
            text: "Алгоритм автоматически определяющий время отправки реактивационной кампании для клиента"
        },
    ],
    Newsletters: [
        {
            name: "SMS-рассылки",
            signature: "20% от стоимости базового модуля",
            price: "80 000",
            text: "Управление внешним SMS-шлюзом с возможностями, аналогичными email"
        },
        {
            name: "Viber-рассылки",
            signature: "10% от стоимости базового модуля",
            price: "4 000",
            text: "Управление Viber"
        },
        {
            name: "Mobile Push",
            signature: "20% от стоимости базового модуля",
            price: "8 000",
            text: "Управление Mobile Push"
        },
        {
            name: "Web Push",
            signature: "25% от стоимости базового модуля",
            price: "12 500",
            text: "Управление Web Push"
        },
        {
            name: "VK исходящие",
            signature: "10% от стоимости базового модуля",
            price: "4 000",
            text: "Управление рассылками в VK по телефону"
        },
        {
            name: "Чатботы / In-App",
            signature: "20% от стоимости базового модуля",
            price: "8 000",
            text: "Telegram, Viber, Whatsapp, VK, Facebook и другие in-app и бот-платформы (требует оговора с гейтвеем)"
        },
        {
            name: "Алгоритм: Рекомендации в рассылках",
            signature: "25% от стоимости базового модуля",
            price: "12 500",
            text: "Ручные и автоматические алгоритмы товарных рекомендаций в рассылках"
        },
        {
            name: "Алгоритм: Лучшее время отправки",
            signature: "10% от стоимости базового модуля",
            price: "4 000",
            text: "Алгоритм автоматически подбирающий лучшее время отправки рассылки для клиента"
        },
        {
            name: "Алгоритм: Контроль частоты рассылок",
            signature: "20% от стоимости базового модуля",
            price: "8 000",
            text: "Алгоритм автоматически отключающий для клиента те массовые рассылки, которые не будут прочитаны"
        }
    ],
    Loyalty: [
        {
            name: "Лояльность и акции",
            signature: "25% от стоимости базового модуля",
            price: "12 500",
            text: "Идентификация по карте или телефону на кассе и в корзине, накопление и списание баллов, выдача и замена карт, личный кабинет, скидочные и балльные акции"
        },
        {
            name: "Призы, розыгрыши, конкурсы",
            signature: "10% от стоимости базового модуля",
            price: "4 000",
            text: "Магазин призов, гарантированные призы и творческие конкурсы"
        },
        {
            name: "Интеграция с электронными кошельками",
            signature: "20% от стоимости базового модуля",
            price: "8 000",
            text: "Работа с электронными картами (Apple Wallet и Google Pay) через внешних провайдеров: идентификация на кассе, обновление данных карт, отправка пушей"
        },
    ],
    Personalization: [
        {
            name: "Рекомендации на сайте",
            signature: "25% от стоимости базового модуля",
            price: "12 500",
            text: "Ручные и автоматические алгоритмы товарных рекомендаций на сайте, виджет для сайта"
        },
        {
            name: "Pop-Ups и динамические блоки",
            signature: "10% от стоимости базового модуля",
            price: "4 000",
            text: "Всплывающие и встроенные динамические формы и блоки на сайте: подписка, отписка, таймеры, выделение положительных отзывов, чек корзины и другие механики"
        }
    ],
};

class Detalization extends React.Component<{}> {
    public render() {
        return (
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                <div style={{ marginBottom: "10px" }}>
                    <DetalizationHeader title="Детализация за февраль 2019" />
                </div>
                <DetalizationContent />
                <div style={{ marginTop: "40px" }}>
                    <Tabs dataTabs={dataTab} dataTabsContent={dataModule} />
                </div>
            </div>
        );
    }
}

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(<Detalization />, entryElement);
