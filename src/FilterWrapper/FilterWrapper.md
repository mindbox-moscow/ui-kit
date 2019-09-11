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
<h1>Пример 1 - пустой фильтр</h1>
<FilterWrapper
    statisticsDescription="Всего клиентов"
    statisticsValue={1021318}
    doesContainFilter={false}
>
    <FiltrationGroupComponent
        state="view"
        groupType="or"
        andLabel="И"
        orLabel="ИЛИ"
        shouldShowLabel={false}
        addSimpleConditionButton={<Button className="kit-filter-editor__btn">Добавить фильтр</Button>}
        addGroupConditionButton={<Button className="kit-filter-editor__btn">И</Button>}
    />
    <i>Добавьте фильтр, чтобы создать выборку клиентов</i>
</FilterWrapper>
<br />
<br />
<h1>Пример 2 - Нажал "или" - пустая группа в фокусе, пустая группа ИЛИ в режиме редактирования</h1>
<FilterWrapper
    statisticsDescription="Всего клиентов"
    statisticsValue={1021318}
    doesContainFilter={true}
    applyButtonCaption="Применить фильтр"
	clearButtonCaption="Сбросить фильтр"
	onApply={() => { console.log("apply filter"); }}
	onClear={() => { console.log("clear filter"); }}
>
    <FiltrationGroupComponent
        state="edit"
        groupType="or"
        andLabel="И"
        orLabel="ИЛИ"
        shouldShowLabel={true}
        addSimpleConditionButton={<Button className="kit-filter-editor__btn">Добавить фильтр</Button>}
        addGroupConditionButton={<Button className="kit-filter-editor__btn">И</Button>}
    />
</FilterWrapper>
<br />
<br />
<h1>Пример 3 - Нажал "И" - Добавилась пустая группа ИЛИ в группу ИЛИредактирования</h1>
<FilterWrapper
    statisticsDescription="Всего клиентов"
    statisticsValue={1021318}
    doesContainFilter={true}
    applyButtonCaption="Применить фильтр"
	clearButtonCaption="Сбросить фильтр"
	onApply={() => { console.log("apply filter"); }}
	onClear={() => { console.log("clear filter"); }}
>
    <FiltrationGroupComponent
        state="view"
        groupType="or"
        andLabel="И"
        orLabel="ИЛИ"
        shouldShowLabel={true}
    >
        <FiltrationGroupComponent
            state="edit"
            groupType="or"
            andLabel="И"
            orLabel="ИЛИ"
            shouldShowLabel={true}
            addSimpleConditionButton={<Button className="kit-filter-editor__btn">Добавить фильтр</Button>}
            addGroupConditionButton={<Button className="kit-filter-editor__btn">И</Button>}
        />
    </FiltrationGroupComponent>
</FilterWrapper>
<br />
<br />
<h1>Пример 4 - Закрыл редактирование группы, отображается пустая группа И в группе ИЛИ</h1>
<FilterWrapper
    statisticsDescription="Всего клиентов"
    statisticsValue={1021318}
    doesContainFilter={true}
    applyButtonCaption="Применить фильтр"
	clearButtonCaption="Сбросить фильтр"
	onApply={() => { console.log("apply filter"); }}
	onClear={() => { console.log("clear filter"); }}
>
    <FiltrationGroupComponent
        state="view"
        groupType="or"
        andLabel="И"
        orLabel="ИЛИ"
        shouldShowLabel={true}
    >
        <FiltrationGroupComponent
            state="view"
            groupType="and"
            andLabel="И"
            orLabel="ИЛИ"
            shouldShowLabel={true}
        />
    </FiltrationGroupComponent>
</FilterWrapper>
```
