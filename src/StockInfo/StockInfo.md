```jsx
<div style={{background: ""}}>
	<StockList>
		<StockItem type={'percent-round'} title={'Скидка физическим лицам по промокоду'} start={null} 
		finish={'25.11.19'} badgeTitle="Заверешена" size="small"/>
		<StockItem type={'coins'} title={'Скидка физическим лицам по промокоду'} start={'25.11.19'} 
		finish={'25.11.20'}  badgeTitle="Заверешена" size="small" mode="danger" />
		<StockItem isFinished={true} type={'percent-round'} title={'Скидка физическим лицам по промокоду'} start={null} 
		finish={null} badgeTitle="Заверешена" size="small" mode="disabled"/>
	</StockList>
</div>
```
