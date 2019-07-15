```jsx
<ul
    style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    }}
>
    <ActionItem  title={'Скидка физическим лицам по промокоду'} startDate={null} endDate={'25.11.19'}
    status="started" type='bonus'
    />
</ul>
<br/>
<ul
    style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    }}
>
    <ActionItem  title={'Другая акция'} startDate={'25.05.18'} endDate={'25.11.19'} status='in_development'
    type='discount'/>
    <ActionItem  title={'Другая акция'} startDate={'25.05.18'} endDate={'25.11.19'} status='in_development'
        type='discount'/>
        <ActionItem  title={'Другая акция'} startDate={'25.05.18'} endDate={'25.11.19'} status='in_development'
            type='discount'/>
</ul>
<br/>
<ul
    style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    }}
>
	<ActionItem  title={'Другая акция'} startDate={'25.05.18'} endDate={'25.11.19'} status='in_development'
type='discount'
/>
	<ActionItem  title={'Другая акция'} startDate={'25.05.18'} endDate={'25.11.19'} status='in_development'
type='discount' lastBeforeGroup={true}
/>

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

	<ActionItem  title={'Другая акция'} startDate={'25.05.18'} endDate={'25.11.19'} status='ended' statusType="end"
type='discount'
/>
	<ActionItem  title={'Другая акция'} startDate={'25.05.18'} endDate={'25.11.19'} status='in_development'
type='discount'
/>
</ul>
```
