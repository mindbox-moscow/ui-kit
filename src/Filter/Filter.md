```jsx
<div
	style={{
		display: "flex",
		flexWrap: "wrap",
		width: "100%"
	}}
>
	<FilterWrapper>
		<Filter numberClients={"50 248"}>
			<FilterConditionComponent
				typeOfCondition="нет таких"
				nameOfList={"Розничный заказ"}
				isBooleanCondition={true}
			/>
			<FilterConditionComponent
				isNested={true}
				typeOfCondition="есть такие"
				nameOfList={"Что-нибудь"}
			>
				<FilterConditionComponent
					isNested={true}
					typeOfCondition="есть такие"
					nameOfList={"Видео, аудио"}
				>
					<FilterConditionComponent
						isNested={true}
						typeOfCondition="Нет таких"
						nameOfList={"Что-то ещё"}
					/>
				</FilterConditionComponent>
			</FilterConditionComponent>
		</Filter>
	</FilterWrapper>
</div>
```
