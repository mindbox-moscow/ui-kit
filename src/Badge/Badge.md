```jsx
class ProgressExample extends React.Component {
	constructor() {
		super();

		this.state = {
			label: "Идёт отправка",
			progress: 0
		};

		this.intervalId = null;
	}

	componentDidMount() {
		this.intervalId = setInterval(() => {
			if (this.state.progress >= 100) {
				clearInterval(this.intervalId);
				this.intervalId = null;
				this.setState({ label: "Отправлено" });
			} else {
				this.setState(prev => ({ progress: prev.progress + 5 }));
			}
		}, 2000);
	}

	componentWillUnmount() {
		if (this.intervalId !== null) {
			clearInterval(this.intervalId);
		}
	}

	render() {
		const { progress, label } = this.state;

		return (
			<Badge
				mode={label === "Отправлено" ? "success" : "warning"}
				progress={progress}
			>
				<DateLabel
					title={
						<>
							<b>{label}: </b>
							<span>{progress}%</span>
						</>
					}
					date="11 мая 2012"
				>
					<div>Информация об отправке</div>
				</DateLabel>
			</Badge>
		);
	}
}

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
		<ProgressExample />
	</div>
</>;
```
