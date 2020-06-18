```jsx
const NewButton = require("@mindbox-moscow/ui-components").Button;

<>
    <SectionWrapper title="Когда">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </SectionWrapper>
    <SectionWrapper isActive title="Когда">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </SectionWrapper>
    <SectionWrapper isEdit title="Когда">
        <Row isEdit title="Период активности">
            <div style={{marginRight: '10px'}}>
                <RadioButton name='group1' checked={true}>Триггер активен на протяжении всей кампании</RadioButton>
            </div>
            <div>
                <RadioButton name='group1'>Запланировать период активности</RadioButton>
            </div>
            <div style={{marginTop: '8px', width: '100%', fontSize: '13px'}}>
                25 авг 2018 – 1 янв 2019
            </div>
        </Row>
        <Row isEdit title="Режим запуска">
            <div style={{marginRight: '10px'}}>
                <RadioButton name='group2' checked={true}>По событию</RadioButton>
            </div>
            <div>
                <RadioButton name='group2'>По графику</RadioButton>
            </div>
        </Row>
        <Row isEdit title="Инициатор события">
            <div style={{marginRight: '10px'}}>
                <RadioButton name='group3' checked={true}>Любой</RadioButton>
            </div>
            <div>
                <RadioButton name='group3'>Настроить фильтр по потребителям</RadioButton>
            </div>
        </Row>
        <div style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
            <div style={{minWidth: '210px'}}>
                <NewButton
                    disabled
                    size="large"
                    type="primary"
                >
                    Сохранить
                </NewButton>
            </div>
            <Text mode='danger'>Для сохранения изменений необходимо выбрать событие или настроить график</Text>
        </div>
    </SectionWrapper>
</>
```
