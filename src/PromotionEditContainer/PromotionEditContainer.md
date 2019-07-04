```jsx
<PromotionEditContainer
	closeBtnLabel="Закрыть"
	onCloseClick={() => console.log("PromotionEditContainer closed")}
>
	<div style={{ width: "40%" }}>
		<Input defaultValue="Любой контент" />
	</div>
</PromotionEditContainer>
<br />
<PromotionEditContainer
	closeBtnLabel="Закрыть"
	onCloseClick={() => console.log("PromotionEditContainer closed")}
>
	<PromotionEditContainer.Header>
		<div style={{ width: "40%" }}>
			<Input defaultValue="Header" />
		</div>
	</PromotionEditContainer.Header>

	<PromotionEditContainer.Main>
		<div style={{ width: "40%" }}>
			<Input defaultValue="Main" />
		</div>
	</PromotionEditContainer.Main>

	<PromotionEditContainer.Footer>
		<div style={{ width: "40%" }}>
			<Button
				type="button"
				size="medium"
				color="gray"
			>
				Footer
			</Button>
		</div>
	</PromotionEditContainer.Footer>
</PromotionEditContainer>
```
