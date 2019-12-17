```jsx
<>
	<div
		style={{
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		}}
	>
		<Badge>Триггер активен</Badge>
		<Badge color={constants.COLORS.Blue}>Триггер не активен</Badge>
		<Badge color={constants.COLORS.Purple}>
			<DateLabel title="Триггер в разработке" date="11 мая 2012" />
		</Badge>
	</div>
	<div
		style={{
			marginTop: "15px",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		}}
	>
		<Badge size="small" mode="success">
			Запущена
		</Badge>
		<Badge size="small" mode="warning">
			Запущена (тест)
		</Badge>
		<Badge size="small" mode="danger">
			Остановлена
		</Badge>
		<Badge size="small" mode="disabled">
			Завершена
		</Badge>
		<Badge size="small" mode="ghost">
			В разработке
		</Badge>
	</div>
	<div style={{ marginTop: "15px" }}>
		<Badge mode="warning" progress={72}>
			<b>Идёт отправка:</b> 72% -
			<DateLabel date="12 окт 2019" />
		</Badge>
	</div>
</>
```
