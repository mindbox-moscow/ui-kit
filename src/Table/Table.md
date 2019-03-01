```jsx
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

<div style={{ display: "flex" }}>
    <Table rows={data} th1="Дополнительные модули" th2="Стоимость в % от базового модуля" />
</div>
```