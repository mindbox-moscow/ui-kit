```jsx
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
        help: "текст с подсказкой"
    }
];

<div style={{ display: "flex", justifyContent: "space-between" }}>
    <DetalizationBlockInfo rows={detailsRows} />
</div>
```
