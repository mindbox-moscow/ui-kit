```jsx
<div style={{ position: "relative", height: "400px" }}>
	<FilterDetails
		helpCaption="Простая категория Caption"
		editorComponent={
			<FilterConditionEditorComponent
				innerEditorComponent={""}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		}
		helpComponent={
			<div>Разнообразный и богатый опыт новая модель организационной</div>
		}
		starred={true}
		toggleStar={() => {
			console.log("toogle details");
		}}
		viewMode="edit"
	/>
</div>
```
