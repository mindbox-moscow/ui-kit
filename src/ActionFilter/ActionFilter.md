```jsx
const NewButton = require("@mindbox-moscow/ui-components").Button;

<div>
  <ActionFilter
    defaultType="Email"
    name="Новая рассылка №37"
    types={[{ title: "Email" }, { title: "Email 2" }, { title: "Email 3" }]}
  >
    <NewButton
      type="primary"
      size="medium"
    >
      Сохранить черновик рассылки
    </NewButton>
    <NewButton
      type="primary"
      size="medium"
    >
      Сохранить и перейти к редактированию
    </NewButton>
  </ActionFilter>
</div>
```
