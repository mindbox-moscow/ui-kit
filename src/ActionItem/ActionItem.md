```jsx
<ul
    style={{
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
    }}
    >
  <ActionItem  actionTitle={'Скидка физическим лицам по промокоду'} startDate={null} endDate={'25.11.19'}
              status="started" type='bonus'
              isEditing={true}
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
  <ActionItem  actionTitle={'Другая акция'} startDate={'25.05.18'} endDate={'25.11.19'} status='in_development'
              type='discount'/>
  <ActionItem  actionTitle={'Акции с кассы'} startDate={'01.05.18'} endDate={'21.11.19'} status='stopped'
              type='bonus'/>
  <ActionItem  actionTitle={'Футболка в подарок'} startDate={'05.10.18'} endDate={'25.01.19'} status='started'
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
  <ActionItem  actionTitle={'Снова в школу'} startDate={'31.12.22'} endDate={'09.11.25'} status='ended'
              type='bonus'
              />
  <ActionItem  actionTitle={'Начисление баллов'} startDate={'25.05.18'} endDate={'25.11.19'} status='started_test'
              type='discount' lastBeforeGroup={true}
              />
  <ActionGroup>
    <GroupItem childrenCount={5}
               maxDiscount={20}
               title={"Бытовая техника"}
               information={"Максимальная выгода"}
               isEditing={true}
               >
      <GroupItem sublist={true}
                 childrenCount={15}
                 maxDiscount={25}
                 title={"Бытовая техника"}
                 information={"Максимальная выгода"}>
        <GroupItem sublist={true}
                   childrenCount={15}
                   maxDiscount={25}
                   title={"Бытовая техника"}
                   information={"Максимальная выгода"}
                   isEditing={true}
                   >
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
  <ActionItem  actionTitle={'Бытовая техника'} startDate={null} endDate={null} status='ended' statusType="end"
              type='discount' isEditing={true}
              />
  <ActionItem  actionTitle={'Другая акция'} startDate={'25.05.18'} endDate={'25.11.19'} status='stopped'
              type='bonus'
              />
</ul>
```
