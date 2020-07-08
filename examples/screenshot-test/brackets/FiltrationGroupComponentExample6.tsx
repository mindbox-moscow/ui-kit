import React from "react";
import ReactDOM from "react-dom";

import { FilterWrapperTest, FiltrationGroupComponentTest } from "../utils";

const FiltrationGroupComponentExample6 = () => {
	return (
		<FilterWrapperTest doesContainFilter={true}>
			<FiltrationGroupComponentTest
				groupType="or"
				shouldShowButtons={true}
				shouldShowLabel={true}
			>
				<FiltrationGroupComponentTest
					groupType="and"
					shouldShowButtons={true}
					shouldShowLabel={true}
				>
					<FiltrationGroupComponentTest
						groupType="and"
						shouldShowButtons={true}
						shouldShowLabel={true}
					>
						<FiltrationGroupComponentTest
							groupType="and"
							shouldShowButtons={true}
							shouldShowLabel={true}
						>
							<FiltrationGroupComponentTest
								groupType="and"
								shouldShowButtons={true}
								shouldShowLabel={true}
							/>
						</FiltrationGroupComponentTest>
					</FiltrationGroupComponentTest>
				</FiltrationGroupComponentTest>
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
		<FiltrationGroupComponentExample6 />
	</div>,
	entryElement
);
