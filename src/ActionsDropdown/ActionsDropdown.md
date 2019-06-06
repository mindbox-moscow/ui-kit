```jsx
<>
	<div style={{ marginBottom: "15px" }}>
		<span style={{ marginRight: "8px" }}>Группы с заголовками</span>

		<ActionsDropdown className="extended-class">
			<ActionsDropdown.Action
				title="Редактировать"
				onClick={() => console.log("Редактировать")}
			/>
			<ActionsDropdown.Group title="Добавить">
				<ActionsDropdown.Action
					title="Акцию"
					onClick={() => console.log("Добавить акцию")}
				/>
				<ActionsDropdown.Action
					title="Подгруппу"
					onClick={() => console.log("Добавить подгруппу")}
				/>
			</ActionsDropdown.Group>
			<ActionsDropdown.Group title="Акции в группе">
				<ActionsDropdown.Action
					title="Остановить"
					onClick={() => console.log("Остановить")}
				/>
				<ActionsDropdown.Action
					title="Запустить"
					onClick={() => console.log("Запустить")}
				/>
				<ActionsDropdown.Action
					title="Архивировать"
					onClick={() => console.log("Архивировать")}
				/>
			</ActionsDropdown.Group>
		</ActionsDropdown>
	</div>
	<div style={{ marginBottom: "15px" }}>
		<span style={{ marginRight: "8px" }}>Группа без заголовка</span>

		<ActionsDropdown className="extended-class">
			<ActionsDropdown.Action
				title="Редактировать"
				onClick={() => console.log("Редактировать")}
			/>
			<ActionsDropdown.Group>
				<ActionsDropdown.Action
					title="Остановить"
					onClick={() => console.log("Остановить")}
				/>
				<ActionsDropdown.Action
					title="Архивировать"
					onClick={() => console.log("Архивировать")}
				/>
			</ActionsDropdown.Group>
		</ActionsDropdown>
	</div>
</>
```
