```jsx
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
];

<div style={{ display: "flex", justifyContent: "space-between" }}>
    <DetalizationCalculations data={statistics} title="Заголовок" />
</div>
```
