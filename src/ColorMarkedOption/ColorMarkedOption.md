```jsx
const data = {
	single: [
		{
			color: "#6200EA",
			title: "#6200EA"
		}
	],
	multiple: [
		{
			color: "#6200EA",
			title: "#6200EA"
		},
		{
			color: "#A7FFEB",
			title: "#A7FFEB"
		},
		{
			color: "#FFC107",
			title: "#FFC107"
		}
	]
};

<div>
	<ColorMarkedOption items={data.single} />
	<br />
	<br />
	<ColorMarkedOption items={data.multiple} />
</div>;
```
