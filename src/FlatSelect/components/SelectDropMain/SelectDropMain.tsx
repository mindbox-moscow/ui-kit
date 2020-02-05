import * as React from "react";
import { SelectDropMainProps } from "./types";

export const SelectDropMain: React.FC<SelectDropMainProps> = ({
	onScroll,
	children,
	getChildRef
}) => {
	const selectRef = React.useRef<HTMLDivElement>(null);
	let scrollHandler: () => void;

	React.useEffect(() => {
		addScrollHandler();

		if (getChildRef) {
			getChildRef(selectRef);
		}

		return removeScrollHandler;
	}, []);

	const addScrollHandler = () => {
		if (onScroll && !scrollHandler) {
			const selectNode = selectRef.current;

			if (selectNode) {
				scrollHandler = onScroll(selectNode);
				selectNode.addEventListener("scroll", scrollHandler);
			}
		}
	};

	const removeScrollHandler = () => {
		if (scrollHandler && selectRef.current) {
			selectRef.current.removeEventListener("scroll", scrollHandler);
		}
	};

	return (
		<div className="kit-selectR-drop-main" ref={selectRef}>
			<ul className="kit-selectR-results kit-selectR-results-default">
				{children}
			</ul>
		</div>
	);
};
