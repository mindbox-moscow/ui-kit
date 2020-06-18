```jsx
const NewButton = require("@mindbox-moscow/ui-components").Button;

<Header
    title="Триггер №15"
    description="Добавьте короткое описание триггера"
    isDevelop
>
    <span className="kit-page__button">
        <NewButton
            icon="pause"
            size="medium"
            type="secondary"
        >
            Остановить
        </NewButton>
    </span>
    <span className="kit-page__button">
        <NewButton
            disabled
            icon="play"
            size="medium"
            type="secondary"
        >
            Запустить
        </NewButton>
    </span>
    <span className="kit-page__button">
        <NewButton
            size="medium"
            type="secondary"
        >
            Сохранить и выйти
        </NewButton>
    </span>
    <span className="kit-page__button">
        <NewButton
            size="medium"
            type="secondary"
        >
            Клонировать
        </NewButton>
    </span>
    <span className="kit-page__button">
        <NewButton
            size="medium"
            type="negative"
        >
            Удалить
        </NewButton>
    </span>
</Header>
```
