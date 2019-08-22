```jsx
const handleChangeAndValidate = value => {
	if (value !== "Welcome") {
		console.log("Ошибка валидации!");

		return false;
	}

	console.log("Новое значение TextLine:", value);
};

<div
	style={{
		display: "flex",
		flexDirection: "column"
	}}
>
	<TextLine text="Welcome" isTitle />
	<TextLine text="Welcome" />
	<TextLine text="Welcome" onChange={handleChangeAndValidate} />
	<TextLine text="Welcom" onChange={handleChangeAndValidate} isEditing />
</div>;
```
