```jsx
<div style={{ display: "flex", justifyContent: "space-between" }}>
<ActionGroup>
<GroupItem childrenCount={5}
maxDiscount={20}
title={"Бытовая техника"}
information={"Максимальная выгода"}>
<GroupItem sublist={true}
childrenCount={15}
maxDiscount={25}
title={"Бытовая техника"}
information={"Максимальная выгода"}>

	<GroupItem sublist={true}
	childrenCount={15}
	maxDiscount={25}
	title={"Бытовая техника"}
	information={"Максимальная выгода"}>
	
		<GroupItem sublist={true}
		childrenCount={15}
		maxDiscount={25}
		title={"Бытовая техника"}
		information={"Максимальная выгода"}>
		
			<GroupItem sublist={true}
			childrenCount={15}
			maxDiscount={25}
			title={"Бытовая техника"}
			information={"Максимальная выгода"}/>
			</GroupItem>
		
		</GroupItem>
	
	</GroupItem>
	</GroupItem>
</ActionGroup>
</div>
```
