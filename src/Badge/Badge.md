```jsx
<>
	<div
		style={{
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		}}
	>
		<Badge title="Триггер активен" />
		<Badge title="Триггер не активен" color={constants.COLORS.Blue} />
		<Badge
			title="Триггер в разработке"
			color={constants.COLORS.Purple}
			date="11 мая 2012"
		/>
	</div>
	<div
		style={{
			marginTop: "15px",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		}}
	>
		<Badge title="Запущена" size="small" mode="success" />
		<Badge title="Запущена (тест)" size="small" mode="warning" />
		<Badge title="Остановлена" size="small" mode="danger" />
		<Badge title="Завершена" size="small" mode="disabled" />
		<Badge title="В разработке" size="small" mode="ghost" />
	</div>
</>
```
