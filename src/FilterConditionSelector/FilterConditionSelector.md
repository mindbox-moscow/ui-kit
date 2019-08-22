```jsx
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
		type: "filtrationObjectCategory",
		name: "Пустая тестовая категория",
		helpCaption: "Пустая тестовая категория Caption",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => null,
		toggleExpand: () => null,
		editorComponent: <div>Editor Component Example</div>,
		isSelected: false,
		getChildren: () => [],
		helpComponent: <div>Просто пустая тестовая категория</div>
	}
];

<div style={{ position: "relative" }}>
	<FilterConditionSelector
		hierarchy={hierarchy}
		selectedElement={hierarchy[1]}
	/>
</div>;
```
