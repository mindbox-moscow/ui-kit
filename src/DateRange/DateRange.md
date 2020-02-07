```jsx
class DateRangeExample extends React.Component {
	constructor() {
		super();
		this.state = {
			value: {
				type: "no-filter"
			}
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		this.setState({ value });
	}

	render() {
		const { value } = this.state;

		return (
			<DateRange
				caption={{
					labelNoFilter: "Показать",
					radioTextNoFilter: "за весь период",
					labelConcrete: "или конкретный период",
					radioConcreteFromText: "от",
					radioConcreteToText: "до",
					labelLast: "или последняя(ий)",
					radioTextWeek: "неделя",
					radioTextMonth: "месяц",
					radioTextYear: "год",
					helpCaption: "Конкретный период рассылки",
					tooltipContent:
						"Левая граница интервала должна быть меньше правой",
					addFilterButtonCaption: "Применить изменения",
					cancelFilterButtonCaption: "Отменить"
				}}
				value={value}
				onChange={this.handleChange}
			/>
		);
	}
}

<div
	style={{
		position: "relative",
		width: "1200px",
		left: "50%",
		transform: "translateX(-50%)"
	}}
>
	<DateRangeExample />
</div>;
```
