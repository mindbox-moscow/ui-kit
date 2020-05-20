```jsx
<Tooltip title="Тултип показывается по ховеру">
	Раздаем промокод за регистрацию на сайте, при использовании делаем скидку в
	размере 15%.
</Tooltip>

<br/>
<br/>

<Tooltip
	title="Тултип открывается по клику в порталe"
	position="bottom"
	showByClick={true}
>
	Левая граница интервала должна быть
	меньше правой
</Tooltip>
<br/>
<br/>
<Tooltip
	title={<IconSvg type="warning" />}
	position="bottom"
	showByClick={true}
>
	Левая граница интервала должна быть
	меньше правой
</Tooltip>
```
