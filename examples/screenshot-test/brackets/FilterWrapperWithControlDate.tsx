import React from "react";
import ReactDOM from "react-dom";

import { Button } from "../../../src/Button";
import { IconSvg } from "../../../src/IconSvg";
import { TimeTravel } from "../../../src/TimeTravel";
import { FilterWrapperTest, FiltrationGroupComponentTest } from "../utils";

const FilterWrapperWithControlDate = () => {
	return (
		<FilterWrapperTest
			doesContainFilter={true}
			filterActionsCaption="Еще"
			filterActions={[
				{
					component: (
						<Button size="xxs" color="gray">
							<IconSvg type="cross-arrows" />И
						</Button>
					),
					isImportant: true
				},
				{
					component: (
						<Button size="xxs" color="gray">
							<IconSvg type="cross-arrows" />
							ИЛИ
						</Button>
					),
					isImportant: true
				},
				{
					component: <>Копировать фильтр</>,
					isImportant: false
				},
				{
					component: <> Сохранить фильтр</>,
					isImportant: false
				}
			]}
			headInformation={<TimeTravel onDatesChange={() => {}} />}
		>
			<FiltrationGroupComponentTest groupType="or" shouldShowLabel={true}>
				<FiltrationGroupComponentTest
					state="edit"
					groupType="and"
					shouldShowLabel={true}
					shouldShowButtons={true}
					moreConditionToggleCaption="Действие"
					moreActions={[
						{
							title: "Редактировать",
							onClick: () => console.log("Click")
						}
					]}
				/>
			</FiltrationGroupComponentTest>
		</FilterWrapperTest>
	);
};

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
	<div
		style={{
			position: "relative",
			width: "1200px",
			marginLeft: "auto",
			marginRight: "auto"
		}}
	>
		<FilterWrapperWithControlDate />
	</div>,
	entryElement
);
