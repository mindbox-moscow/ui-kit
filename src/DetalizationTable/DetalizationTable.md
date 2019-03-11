```jsx
const data = [{
        name: "Базовый модуль",
        description: "Стоимость базового модуля зависит от количества потребителей",
        value: "80 000",
    },
    {
        name: "Рекомендации на сайте",
        description: "Ручные и автоматические алгоритмы товарных рекомендаций на сайте, виджет для сайта",
        value: "20%",
    }
];

<div style={{ display: "flex", justifyContent: "space-between" }}>
    <DetalizationTable rows={data} th1="Наименование" th2="Стоимость" />
</div>
```
