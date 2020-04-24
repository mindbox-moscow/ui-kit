```jsx
class ExampleTextbox extends React.Component {
	constructor() {
		super();
		this.state = {
			value: ""
		};

		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(value) {
		this.setState({
			value
		});
	}

	render() {
		const { value } = this.state;

		return (
			<Textbox
				placeholder="Textbox"
				value={value}
				onChange={this.handleOnChange}
				notFormControl={true}
			/>
		);
	}
}

<div>
	<ExampleTextbox />
</div>;
```
