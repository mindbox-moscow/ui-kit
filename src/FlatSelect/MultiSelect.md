```jsx
class MultiSelectExample extends React.Component {
	constructor() {
		super();
		this.state = {
			items: ["Foo", "Bar", "Baz", "Spam"],
			selectedValue: ["Bar", "Baz"],
			height: 2,
			width: 4
		};
	}

	render() {
		const { items, selectedValue, height, width } = this.state;

		const itemFormatter = value => ({
			key: value,
			text: value,
			value
		});

		return (
			<MultiSelect
				items={items}
				selectedValue={selectedValue}
				height={height}
				width={width}
				itemFormatter={itemFormatter}
			/>
		);
	}
}

<div>
	<MultiSelectExample />
</div>;
```
