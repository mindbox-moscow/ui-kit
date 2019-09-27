```jsx
<div style={{}}>
	<FiltrationConditionComponent
		filtrationObjectName="Цена"
		filtrationMethodName="заполнена и"
	/>
	<FiltrationConditionComponent
		filtrationObjectName="Розничный заказ"
		filtrationMethodName="в количестве"
	/>
	<FiltrationConditionComponent
		filtrationObjectName="Дата и время"
		filtrationMethodName="заполнена и"
		filtrationMethodParametersComponent={
			<Wrapper tag="span">
				<InvalidHighLight>от 02.01.2019 до 01.01.2019</InvalidHighLight>
				<Tooltip
					title={<IconSvg type="warning" />}
					position="top"
					textDecoration={false}
				>
					Левая граница интервала должна быть меньше правой
				</Tooltip>
			</Wrapper>
		}
	/>
</div>
```
