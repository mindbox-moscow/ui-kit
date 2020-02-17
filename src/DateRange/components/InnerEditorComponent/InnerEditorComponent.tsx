import * as React from "react";

import { DateField } from "../../../DateField";
import { IconSvg } from "../../../IconSvg";
import { Tooltip } from "../../../Tooltip";

interface IProps {
	radioConcreteFromText: string;
	radioConcreteToText: string;
	tooltipContent: React.ReactNode;
	hasError: boolean;
	monthes?: string[]
	dateFrom?: Date;
	dateTo?: Date;
	onChangeDateFrom: (date: Date) => void;
	onChangeDateTo: (date: Date) => void;
}

export const InnerEditorComponent: React.FC<IProps> = ({
	radioConcreteFromText,
	radioConcreteToText,
	tooltipContent,
	monthes,
	hasError,
	dateFrom,
	dateTo,
	onChangeDateFrom,
	onChangeDateTo,
}) => (
	<div className="kit-date-range__popup">
		<div className="kit-date-range__popup-dates">
			<span className="kit-date-range__popup-date-text">
				{radioConcreteFromText}
			</span>
			<div className="kit-date-range__popup-fields">
				<div className="kit-date-range__popup-date">
					<DateField
						monthes={monthes}
						error={hasError}
						defaultDate={dateFrom}
						onChange={onChangeDateFrom}
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
						monthes={monthes}
						error={hasError}
						defaultDate={dateTo}
						onChange={onChangeDateTo}
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
