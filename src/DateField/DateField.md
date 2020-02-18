```jsx
const months = [
	"Янв",
	"Фев",
	"Мар",
	"Апр",
	"Май",
	"Июн",
	"Июл",
	"Авг",
	"Сен",
	"Окт",
	"Ноя",
	"Дек"
];

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

<div>
	<DateField
		onChange={() => null}
		months={months}
		days={days}
		value={new Date(2018, 11, 10)}
		noShadow={false}
	/>
	<br />
	<br />
	<DateField
		onChange={() => null}
		months={months}
		days={days}
		value={new Date(2019, 12, 12)}
		noShadow={false}
		disabled
	/>
	<br />
	<br />
	<DateField
		onChange={() => null}
		months={months}
		days={days}
		value={new Date(2019, 12, 12)}
		noShadow={true}
	/>
	<br />
	<br />
	<DateField
		onChange={() => null}
		months={months}
		days={days}
		value={new Date(2019, 12, 12)}
		noShadow={true}
		disabled
	/>
</div>;
```
