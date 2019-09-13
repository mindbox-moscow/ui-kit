import * as React from "react";

interface Props {
	statisticsValue: React.ReactNode;
	statisticsDescription: string;
}

export const InfoWrapper: React.FC<Props> = ({
	children,
	statisticsDescription,
	statisticsValue
}) => (
	<div className="kit-filter__info-wrap">
		<span className="kit-filter__clients">
			{`${statisticsDescription}: `}
			<span className="kit-filter__clients-number">
				{statisticsValue}
			</span>
		</span>
		{children}
	</div>
);
