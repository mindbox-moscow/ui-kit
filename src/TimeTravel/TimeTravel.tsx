import * as React from "react";
import { IconSvg } from "../IconSvg";
import "./TimeTravel.scss";
import { ITimeTravelProps as Props } from "./types";

export const TimeTravel: React.FC<Props> = ({ onDatesChange }) => {
	const handleAddMonth = () => onDatesChange("+m");
	const handleSubtractMonth = () => onDatesChange("-m");
	const handleAddWeek = () => onDatesChange("+w");
	const handleSubtractWeek = () => onDatesChange("-w");
	const handleAddDay = () => onDatesChange("+d");
	const handleSubtractDay = () => onDatesChange("-d");

	return (
		<div className="kit-time-travel">
			<button
				className="kit-time-travel__button"
				type="button"
				onClick={handleSubtractMonth}
			>
				<span className="kit-time-travel__button-inner">
					-M
				</span>
			</button>
			<button
				className="kit-time-travel__button"
				type="button"
				onClick={handleSubtractWeek}
			>
				<span className="kit-time-travel__button-inner">
					-7
				</span>
			</button>
			<button
				className="kit-time-travel__button"
				type="button"
				onClick={handleSubtractDay}
			>
				<span className="kit-time-travel__button-inner">
					-1
				</span>
			</button>
			<IconSvg type="calendar" className="kit-time-travel__calendar" />
			<button
				className="kit-time-travel__button"
				type="button"
				onClick={handleAddDay}
			>
				<span className="kit-time-travel__button-inner">
					+1
				</span>
			</button>
			<button
				className="kit-time-travel__button"
				type="button"
				onClick={handleAddWeek}
			>
				<span className="kit-time-travel__button-inner">
					+7
				</span>
			</button>
			<button
				className="kit-time-travel__button"
				type="button"
				onClick={handleAddMonth}
			>
				<span className="kit-time-travel__button-inner">
					+M
				</span>
			</button>
		</div>
	);
};
