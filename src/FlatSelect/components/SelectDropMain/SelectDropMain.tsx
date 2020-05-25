import * as React from "react";
import { SelectDropMainProps } from "./types";

const SelectDropMain: React.FC<SelectDropMainProps> = ({
	children,
	getChildRef
}) => {
	const selectRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (getChildRef) {
			getChildRef(selectRef);
		}
	}, []);

	return (
		<div className="kit-selectR-drop-main" ref={selectRef}>
			<ul className="kit-selectR-results kit-selectR-results-default">
				{children}
			</ul>
		</div>
	);
};

export { SelectDropMain };
