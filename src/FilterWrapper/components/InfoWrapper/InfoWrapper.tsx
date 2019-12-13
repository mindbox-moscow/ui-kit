import cn from "classnames";
import * as React from "react";

interface Props {
	statisticsValue: React.ReactNode;
	statisticsDescription: string;
	isWarning?: boolean;
	shouldShowStatistics?: boolean;
}

export const InfoWrapper: React.FC<Props> = ({
	children,
	statisticsDescription,
	statisticsValue,
	isWarning,
	shouldShowStatistics
}) => (
		<div className="kit-filter__info-wrap">
			<span
				className={cn("kit-filter__clients", {
					"kit-filter__clients_warning": isWarning
				})}
			>
				{shouldShowStatistics ?
					<span>
						{`${statisticsDescription}: `}
						<span className="kit-filter__clients-number">
							{statisticsValue}
						</span>
					</span>
					: null}
			</span>
			{children}
		</div>
	);
