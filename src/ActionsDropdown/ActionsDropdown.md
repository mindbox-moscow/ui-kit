```jsx
<>
	<div style={{ marginBottom: "15px" }}>
		<span style={{ marginRight: "8px" }}>Группы с заголовками</span>

		<ActionsDropdown className="extended-class" toggleBtnText="Действия">
			<ActionsDropdown.Action
				title="Редактировать"
				onClick={() => console.log("Редактировать")}
				closeDropdownOnClick={false}
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
	<div>
		<span style={{ marginRight: "8px" }}>
			Дробдаун с произвольными children
		</span>
		<ActionsDropdown>
			<ul style={{ padding: "10px", margin: 0 }}>
				<li>Раз</li>
				<li>Два</li>
				<li>Три</li>
			</ul>
		</ActionsDropdown>
	</div>
</>
```
