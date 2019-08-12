```jsx
<div
	style={{
		display: "flex",
		flexWrap: "wrap",
		width: "100%"
	}}
>
	<Filter numberClients={"50 248"}>
		<FilterConditionComponent
			filtrationMethodName="нет таких"
			filtrationObjectName={"Розничный заказ"}
		/>
		<FilterConditionComponent
			isNested={"and"}
			isBooleanCondition={true}
			filtrationMethodName="есть такие"
			filtrationObjectName={"Что-нибудь"}
		>
			<FilterConditionComponent
				isNested={"or"}
				isBooleanCondition={true}
				filtrationMethodName="нет таких"
				filtrationObjectName={"Видео, аудио"}
			>
				<FilterConditionComponent
					filtrationMethodName="нет таких"
					filtrationObjectName={"Что-то ещё"}
				/>
				<FilterConditionComponent
					filtrationMethodName="нет таких"
					filtrationObjectName={"Что-то ещё"}
					priceNumber={5000}
				/>
			</FilterConditionComponent>
		</FilterConditionComponent>
	</Filter>
</div>
```
