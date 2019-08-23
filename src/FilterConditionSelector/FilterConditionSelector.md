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

class ExampleComponent extends React.Component {
	constructor() {
		super();
		this.state = { showPopup: false };
		this.togglePopup = this.togglePopup.bind(this);
	}

	togglePopup() {
		console.log("hello");
		this.setState(state => ({
			showPopup: !state.showPopup
		}));
	}
	render() {
		return (
			<>
				<FilterPanel
					addAndFilterBtnText="Добавить фильтр"
					addOrFilterBtnText="ИЛИ"
					hintText="Добавьте фильтр, чтобы создать выборку клиентов"
					clientsCountText="Всего клиентов"
					clientsCount="1 021 318"
					onAddAndFilter={this.togglePopup}
					onAddOrFilter={this.togglePopup}
				/>
				{this.state.showPopup && (
					<FilterConditionSelector
						hierarchy={hierarchy}
						selectedElement={hierarchy[0]}
					/>
				)}
			</>
		);
	}
}

<div style={{ position: "relative" }}>
	<ExampleComponent />
</div>;
```
