```jsx
class ExampleFlatSelectorSimple extends React.Component {
	constructor() {
		super();
		this.state = {
			values: "male"
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(values) {
		this.setState({
			values: values
		});
	}

	render() {
		return (
			<FlatSelector
				onChange={this.handleChange}
				value={this.state.values}
				allowMultiple={false}
				items={[
					{
						key: "male",
						text: "Мужской"
					},
					{
						key: "female",
						text: "Женский"
					}
				]}
			/>
		);
	}
}

class ExampleFlatSelectorMulti extends React.Component {
	constructor() {
		super();
		this.state = {
			values: ["male"]
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(values) {
		this.setState({
			values: values
		});
	}

	render() {
		return (
			<FlatSelector
				onChange={this.handleChange}
				value={this.state.values}
				allowMultiple={true}
				items={[
					{
						key: "male",
						text: "Мужской"
					},
					{
						key: "female",
						text: "Женский"
					}
				]}
			/>
		);
	}
}

<div>
	<h1>Одиночный выбор</h1>
	<ExampleFlatSelectorSimple />
	<br />
	<br />
	<h1>Мультивыбор выбор</h1>
	<ExampleFlatSelectorMulti />
</div>;
```
