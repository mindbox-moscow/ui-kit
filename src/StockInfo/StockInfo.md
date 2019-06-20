```jsx
<div style={{background: ""}}>
	<StockList>
		<StockItem icon={'percent-round'} title={'Скидка физическим лицам по промокоду'} start={null} 
		finish={'25.11.19'} badgeTitle="Заверешена" size="small"/>
		<StockItem icon={'coins'} title={'Скидка физическим лицам по промокоду'} start={'25.11.19'} 
		finish={'25.11.20'}  badgeTitle="Заверешена" size="small" mode="danger" />
		<StockItem isFinished={true} icon={'percent-round'} title={'Скидка физическим лицам по промокоду'} start={null} 
		finish={null} badgeTitle="Заверешена" size="small" mode="disabled"/>
	</StockList>
</div>
```
