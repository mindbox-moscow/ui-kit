```jsx
<FilterWrapper
	statisticsDescription="Потребителей найдено"
	statisticsValue={50248}
	applyButtonCaption="Применить фильтр"
	clearButtonCaption="Сбросить фильтр"
	onApply={() => { console.log("apply filter"); }}
	onClear={() => { console.log("clear filter"); }}
>
	Other components here...
</FilterWrapper>
<br />
<br />
<br />
<FilterWrapper
    statisticsDescription="Всего клиентов"
    statisticsValue={1021318}
    doesContainFilter={false}
>
    <FiltrationGroupComponent
        state="view"
        groupType="and"
        andLabel="И"
        orLabel="ИЛИ"
        shouldShowLabel={false}
        addSimpleConditionButton={<Button className="kit-filter-editor__btn">Добавить фильтр</Button>}
        addGroupConditionButton={<Button className="kit-filter-editor__btn">И</Button>}
    />
    <i>Добавьте фильтр, чтобы создать выборку клиентов</i>
</FilterWrapper>
```
