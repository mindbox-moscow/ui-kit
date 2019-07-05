```jsx
<div
    style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "120px"
    }}
>
    <TextLine text="Welcom" isEditing={true} />
    
    <TextLine text="Welcome" onChange={() => {console.log('hello')}} isEditing={false} />
</div>
```
