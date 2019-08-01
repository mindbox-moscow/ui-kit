```jsx
const list = [{
        year: "2017",
        months: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
        ]
    },
    {
        year: "2018",
        months: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
        ]
    },
    {
         year: "2019",
         months: [
             "Январь",
             "Февраль",
             "Март",
         ]
    }
];
<div style={{ display: "flex" }}>
    <DropDown itemYears={list} btnText="Февраль 2019" />
    <br/>
    <br/>
    <DropDown itemYears={list} icon={true} noBorder={true} 
    btnText="По списку"
/>
</div>
```
