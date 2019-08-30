```jsx
const EditorComponentExample = () => {
	return (
		<div>
			<div style={{ display: "flex", marginBottom: "12px" }}>
				<div style={{ marginRight: "10px", width: "190px" }}>
					<Select
						hasDescriptions={true}
						placeholder="Выберите"
						items={[
							{
								title: "Заполнена и"
							},
							{
								title: "Не заполнена и"
							}
						]}
						defaultValue="Заполнено и"
					/>
				</div>
				<div style={{ width: "190px" }}>
					<Select
						hasDescriptions={true}
						placeholder="Выберите"
						items={[
							{
								title: "равна"
							},
							{
								title: "не равна"
							}
						]}
						defaultValue="равна"
					/>
				</div>
			</div>
			<Input noShadow />
		</div>
	);
};

const hierarchy = [
	{
		id: "behaviour",
		type: "filtrationObjectCategory",
		name: "Поведение",
		helpCaption: "Поведение Caption",
		hasChildren: true,
		isExpanded: false,
		onSelect: () => null,
		toggleExpand: () => null,
		editorComponent: null,
		isSelected: false,
		getChildren: () => null,
		helpComponent: <div>Хелп к категории "Поведение"</div>
	},
	{
		id: "empty",
		type: "simpleFiltrationObject",
		name: "Пустая тестовая категория",
		helpCaption: "Ссылка на установку электронной карты",
		hasChildren: true,
		isExpanded: false,
		onSelect: () => null,
		toggleExpand: () => console.log("Toogle click"),
		editorComponent: (
			<FilterConditionEditorComponent
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: true,
		getChildren: () => [],
		helpComponent: (
			<div>
				Что важно, мы настраиваемся на всю выручку и смотрим все заказы.
				Т.е. видим чистый добавленный эффект, не искаженный никакими
				атрибуциями. Если бы мы смотрели на атрибуцию, которая
				используется, например, в Google Analytics по умолчанию, то
				попали бы в ловушку. Контроль частоты снижает эффект
				каннибализации каналов, и очень вероятно мы бы увидели падение
				выручки в том числе там, где на самом деле ее нет.
			</div>
		)
	}
];

class ExampleComponent extends React.Component {
	render() {
		return (
			<>
				<FilterWrapper
					statisticsDescription="Потребителей найдено"
					statisticsValue={50248}
					applyButtonCaption="Применить фильтр"
					onApply={() => {
						console.log("apply filter");
					}}
				>
					<FilterConditionEditorButton
						label="Добавить фильтр"
						isOpened={true}
						toggleOpen={() => null}
					>
						<FilterConditionSelector
							hierarchy={hierarchy}
							selectedElement={hierarchy[1]}
						/>
					</FilterConditionEditorButton>
				</FilterWrapper>
			</>
		);
	}
}

<div style={{ position: "relative" }}>
	<ExampleComponent />
</div>;
```
