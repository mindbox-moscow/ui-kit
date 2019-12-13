import cn from "classnames";
import * as React from "react";
import { withOutsideClick, WithOutsideClickProps } from "../../../HOCs";
import { Width } from "../../../utils";
import { PanelProps } from "./types";

class Panel extends React.Component<PanelProps & WithOutsideClickProps> {
	public panelRef = React.createRef<HTMLDivElement>();

	public componentDidMount() {
		this.panelHeightOverride();
	}

	public componentDidUpdate() {
		this.panelHeightOverride();
	}

	public render() {
		const { className, width, children, setOutsideClickRef } = this.props;

		if (setOutsideClickRef) {
			setOutsideClickRef(this.panelRef.current as HTMLElement);
		}

		return (
			<div
				className={cn(
					"kit-selectR-drop",
					className,
					Width.getClass(width)
				)}
				ref={this.panelRef}
			>
				{children}
			</div>
		);
	}

	private panelHeightOverride = () => {
		const panel = this.panelRef.current;

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
}

const WithOutsideClickPanel = withOutsideClick(Panel);

export { WithOutsideClickPanel as Panel };
