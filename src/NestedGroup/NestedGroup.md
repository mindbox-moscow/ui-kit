```jsx
<div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#F3F3EB" }}>
    			<NestedList>
    				<NestedItem
    					childrenCount={5}
    					title={"Бытовая техника"}
    					information={"Максимальная выгода"}
    					maxDiscount={20}
    				/>
    				<NestedItem
    					childrenCount={180}
    					title={"Школьные товары, канцтовары"}
    					information={"Последовательное применение"}
    					maxDiscount={null}
    				/>
    				<NestedItem
    					childrenCount={12}
    					title={"Видео, фото"}
    					information={"Суммирование"}
    					maxDiscount={10}
    				>
    					<ul className="kit-nested-list__sublist">
    						<NestedItem
    							childrenCount={5}
    							title={"Бытовая техника"}
    							information={"Максимальная выгода"}
    							maxDiscount={null}
    						>
    							<ul className="kit-nested-list__sublist">
    								<NestedItem
    									childrenCount={5}
    									maxDiscount={50}
    									title={"Бытовая техника"}
    									information={"Максимальная выгода"}
    								/>
    							</ul>
    						</NestedItem>
    					</ul>
    				</NestedItem>
    			</NestedList>
</div>
```
