import * as React from "react";
import { IconSvg } from "../IconSvg";
import "./TimeTravel.scss";
import { AllowedDateChanges, ITimeTravelControl, ITimeTravelProps as Props } from "./types";

const buttons: ITimeTravelControl[] = [
	{ value: "-m", title: "-M" },
	{ value: "-w", title: "-7" },
	{ value: "-d", title: "-1" },
	{ value: "+d", title: "+1" },
	{ value: "+w", title: "+7" },
	{ value: "+m", title: "+M" },
]

export const TimeTravel: React.FC<Props> = ({ onDatesChange }) => {
	const handleDatesChange = (val: AllowedDateChanges) => () => onDatesChange(val);

	return (
		<div className="kit-time-travel">
			{buttons.map((item, index) => (
				<React.Fragment key={index}>
					<button
						className="kit-time-travel__button"
						type="button"
						onClick={handleDatesChange(item.value)}
					>
						<span className="kit-time-travel__button-inner">
							{item.title}
						</span>
					</button>
					{index === 2 && <IconSvg type="calendar" className="kit-time-travel__calendar" />}
				</React.Fragment>
			))}
		</div>
	);
};
