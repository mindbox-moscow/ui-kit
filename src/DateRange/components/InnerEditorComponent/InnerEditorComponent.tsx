import * as React from "react";

import { DateField } from "../../../DateField";
import { IconSvg } from "../../../IconSvg";
import { TimeField } from "../../../TimeField";
import { Tooltip } from "../../../Tooltip";

interface ITimeProp {
	hours: number;
	minutes: number;
}

interface IProps {
	radioConcreteFromText: string;
	radioConcreteToText: string;
	tooltipContent: React.ReactNode;
	hasError: boolean;
	dateFrom: Date;
	dateTo: Date;
	timeFrom: ITimeProp;
	timeTo: ITimeProp;
	onChangeDateFrom: (date: Date) => void;
	onChangeDateTo: (date: Date) => void;
	onChangeTimeFrom: (
		hours: ITimeProp["hours"],
		minutes: ITimeProp["minutes"]
	) => void;
	onChangeTimeTo: (
		hours: ITimeProp["hours"],
		minutes: ITimeProp["minutes"]
	) => void;
}

export const InnerEditorComponent: React.FC<IProps> = ({
	radioConcreteFromText,
	radioConcreteToText,
	tooltipContent,
	hasError,
	dateFrom,
	dateTo,
	timeFrom,
	timeTo,
	onChangeDateFrom,
	onChangeDateTo,
	onChangeTimeFrom,
	onChangeTimeTo
}) => (
	<div className="kit-date-range__popup">
		<div className="kit-date-range__popup-dates">
			<span className="kit-date-range__popup-date-text">
				{radioConcreteFromText}
			</span>
			<div className="kit-date-range__popup-fields">
				<div className="kit-date-range__popup-date">
					<DateField
						error={hasError}
						defaultDate={dateFrom}
						onChange={onChangeDateFrom}
					/>
				</div>
				<div className="kit-date-range__popup-date">
					<TimeField
						error={hasError}
						hours={timeFrom.hours}
						minutes={timeFrom.minutes}
						onChange={onChangeTimeFrom}
					/>
				</div>
			</div>
		</div>
		<div className="kit-date-range__popup-dates">
			<span className="kit-date-range__popup-date-text">
				{radioConcreteToText}
			</span>
			<div className="kit-date-range__popup-fields">
				<div className="kit-date-range__popup-date">
					<DateField
						error={hasError}
						defaultDate={dateTo}
						onChange={onChangeDateTo}
					/>
				</div>
				<div className="kit-date-range__popup-date">
					<TimeField
						error={hasError}
						hours={timeTo.hours}
						minutes={timeTo.minutes}
						onChange={onChangeTimeTo}
					/>
				</div>
			</div>
		</div>
		{hasError && (
			<Tooltip
				title={<IconSvg type="warning" />}
				position="top"
				className="kit-date-range__popup-tooltip"
			>
				{tooltipContent}
			</Tooltip>
		)}
	</div>
);
