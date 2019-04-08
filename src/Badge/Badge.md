```jsx
import {COLORS} from '../utils/constants'
() => (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Badge title="Триггер активен" />
        <Badge title="Триггер не активен" color="blue" />
        <Badge title="Триггер в разработке" color={COLORS.Purple} date="11 мая 2012" />
    </div>
)
```
