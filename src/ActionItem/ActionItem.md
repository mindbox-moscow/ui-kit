```jsx
<div
    style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    }}
>
    <ActionItem  title={'Скидка физическим лицам по промокоду'} startDate={null} endDate={'25.11.19'}
    status="started" type='bonus'
    />
</div>
<br/>
<div
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
</div>
<br/>
<div
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

	<div className="group-action">Группа акций</div>

	<ActionItem  title={'Другая акция'} startDate={'25.05.18'} endDate={'25.11.19'} status='ended' statusType="end"
type='discount'
/>
	<ActionItem  title={'Другая акция'} startDate={'25.05.18'} endDate={'25.11.19'} status='in_development'
type='discount'
/>
</div>
```
