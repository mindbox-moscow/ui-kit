import cn from "classnames";
import * as React from "react";
import { withOutsideClick, WithOutsideClickProps } from "../../../HOCs";
import { Width } from "../../../utils";
import { PanelProps } from "./types";

type Props = PanelProps & WithOutsideClickProps;

const Panel: React.FC<Props> = ({
	className,
	width,
	children,
	setOutsideClickRef,
	parentRef
}) => {
	const panelRef = React.createRef<HTMLDivElement>();

	React.useEffect(() => {
		panelHeightOverride();
	});

	React.useEffect(() => {
		if (parentRef && parentRef.current && panelRef.current) {
			const { clientWidth } = parentRef.current;
			panelRef.current.style.width = `${clientWidth}px`;
		}
	}, []);

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

	if (setOutsideClickRef) {
		setOutsideClickRef(panelRef.current as HTMLElement);
	}

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

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

const WithOutsideClickPanel = withOutsideClick(Panel);

export { WithOutsideClickPanel as Panel };
