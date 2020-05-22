import cn from "classnames";
import * as React from "react";
import ResizeObserver from "resize-observer-polyfill";

import { useClickOutside } from "../../../HOOKs";

import { Width } from "../../../utils";
import { IProps } from "./types";

const Panel: React.FC<IProps> = ({
	className,
	width,
	children,
	parentRef,
	onCLose
}) => {
	const panelRef = React.useRef<HTMLDivElement | null>(null);

	const panelHeightOverride = () => {
		const panel = panelRef.current;

		if (panel) {
			const { top, bottom } = panel.getBoundingClientRect();
			let cutMaxHeight = 0;

			if (top < 0) {
				cutMaxHeight = top;
			} else if (bottom > document.body.offsetHeight) {
				cutMaxHeight = document.body.offsetHeight - bottom;
			}

			if (cutMaxHeight < 0) {
				// Ищем SelectDropMain и меняем максимальную высоту, минимум 100
				const selectList = panel.querySelector(
					".kit-selectR-drop-main"
				) as HTMLElement;
				const maxHeightStyle = parseInt(
					getComputedStyle(selectList).maxHeight,
					10
				);
				if (!isNaN(maxHeightStyle)) {
					selectList.style.maxHeight =
						Math.max(cutMaxHeight + maxHeightStyle, 150) + "px";
				}
			}
		}
	};

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const handleResizePanel = () => {
		panelHeightOverride();
	};

	React.useEffect(() => {
		if (parentRef && parentRef.current && panelRef.current) {
			const { clientWidth } = parentRef.current;
			panelRef.current.style.width = `${clientWidth}px`;

			resizeObserver.observe(panelRef.current);
		}

		return () => {
			if (panelRef.current !== null && resizeObserver) {
				resizeObserver.unobserve(panelRef.current);
			}
		};
	}, []);

	const resizeObserver: ResizeObserver = new ResizeObserver(
		handleResizePanel
	);

	useClickOutside(panelRef, onCLose, true, true);

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
