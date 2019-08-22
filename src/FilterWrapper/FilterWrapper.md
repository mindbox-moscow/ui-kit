```jsx
<div
	style={{
		display: "flex",
		flexWrap: "wrap",
		width: "100%"
	}}
>
	<FilterWrapper
		statisticsDescription="Потребителей найдено"
		statisticsValue={50248}
		applyButtonCaption="Применить фильтр"
		onApply={() => { console.log("apply filter"); }}
	>
		Other components here...
	</FilterWrapper>
</div>
```
