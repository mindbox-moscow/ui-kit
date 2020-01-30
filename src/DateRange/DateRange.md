```jsx
<div
	style={{
		position: "relative",
		width: "1200px",
		left: "50%",
		transform: "translateX(-50%)"
	}}
>
	<DateRange
		labelNoFilter="Показать"
		radioTextNoFilter="за весь период"
		labelConcrete="или конкретный период"
		radioConcreteFromText="от"
		radioConcreteToText="до"
		labelLast="или последняя(ий)"
		radioTextWeek="неделя"
		radioTextMonth="месяц"
		radioTextYear="год"
		helpCaption="Конкретный период рассылки"
		tooltipContent="Левая граница интервала должна быть меньше правой"
		addFilterButtonCaption="Применить изменения"
		cancelFilterButtonCaption="Отменить"
		onChange={() => {}}
	/>
</div>
```
