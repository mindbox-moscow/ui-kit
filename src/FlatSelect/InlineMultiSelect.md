```jsx
class InlineMultiSelectExample extends React.Component {
	constructor() {
		super();
		this.state = {
			items: ["Foo", "Bar", "Baz", "Spam"],
			selectedValue: ["Bar", "Baz"],
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
			<InlineMultiSelect
				items={items}
				selectedValue={selectedValue}
				itemFormatter={itemFormatter}
			/>
		);
	}
}

<div>
	<InlineMultiSelectExample />
</div>;
```
