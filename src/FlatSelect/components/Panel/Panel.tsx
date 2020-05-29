import cn from "classnames";
import * as React from "react";
import ResizeObserver from "resize-observer-polyfill";

import { Width } from "../../../utils";
import { DropdownContext } from "../Dropdown";
import { IProps } from "./types";

const Panel: React.FC<IProps> = ({ className, width, children, parentRef }) => {
	const panelRef = React.useRef<HTMLDivElement>(null);
	const { isOpenDropdown } = React.useContext(DropdownContext);

	const panelHeightOverride = () => {
		const panel = panelRef.current;

		if (panel) {
			const { top, bottom, height } = panel.getBoundingClientRect();
			const offsetHeight = top >= 0 && document.body.offsetHeight;
			let cutMaxHeight = 0;

			if (top < 0) {
				cutMaxHeight = height - Math.abs(top);
			} else if (bottom > offsetHeight && offsetHeight) {
				cutMaxHeight = offsetHeight - bottom;
			}

			if (cutMaxHeight > 0) {
				panel.style.maxHeight = `${cutMaxHeight}px`;
			}
		}
	};

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	React.useEffect(
		() => {
			if (isOpenDropdown) {
				if (parentRef && parentRef.current && panelRef.current) {
					const { clientWidth } = parentRef.current;
					panelRef.current.style.width = `${clientWidth}px`;

					resizeObserver.observe(panelRef.current);
				}
			}

			return () => {
				if (panelRef.current !== null && resizeObserver) {
					resizeObserver.unobserve(panelRef.current);
				}
			};
		},
		[isOpenDropdown]
	);

	const resizeObserver: ResizeObserver = new ResizeObserver(
		panelHeightOverride
	);

	return (
		<div
			onClick={handleClick}
			className={cn("kit-selectR-drop", className, Width.getClass(width))}
			ref={panelRef}
		>
			{children}
		</div>
	);
};

export { Panel };
