```jsx
<div
	style={{
		display: "flex",
		flexWrap: "wrap",
		width: "100%"
	}}
>
	<FilterWrapper
		StatisticsDescription={"Потребителей найдено"}
		StatisticsValue={"50 248"}
		buttonTextFirst="Добавить фильтр"
		buttonTextSecond="Добавить группу"
		buttonTextThird="Сменить тип связи «ИЛИ»"
		buttonTextFourth="Применить фильтр"
		buttonTextFives="Сбросить фильтр"
		onButtonFourClick={() => { console.log("apply filter"); }}
	>
		Other components here...
	</FilterWrapper>
</div>
```
