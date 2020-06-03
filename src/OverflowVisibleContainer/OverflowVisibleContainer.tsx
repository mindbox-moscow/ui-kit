import cn from "classnames";
import * as React from "react";
import { Portal } from "../Portal";

import "./OverflowVisibleContainer.scss";
import {
	OverflowVisibleFixedContext,
	ScrollableContainerContext
} from "./OverflowVisibleContext";

export interface IProps {
	parentRef: React.RefObject<HTMLElement>;
	className?: string;
	children?: React.ReactNode;
}

type Ref = HTMLDivElement;

export const OverflowVisibleContainer = React.forwardRef<Ref, IProps>(
	(props, ref) => {
		const { parentRef, className, children } = props;

		const currentRef = React.useRef<HTMLDivElement>(null);
		const containerRef =
			(ref as React.RefObject<HTMLDivElement>) || currentRef;
		const ticking = React.useRef(false);

		const isFixed = React.useContext(OverflowVisibleFixedContext);
		const scrollableContainer = React.useContext(
			ScrollableContainerContext
		);

		const [isLoaded, setIsLoaded] = React.useState(false);
		const [positionLeft, setPositionLeft] = React.useState(0);
		const [positionTop, setPositionTop] = React.useState(0);

		const calculateTopPosition = () => {
			if (
				containerRef &&
				containerRef.current &&
				scrollableContainer &&
				scrollableContainer.current
			) {
				ticking.current = false;

				containerRef.current.style.transform = `translateY(${positionTop -
					scrollableContainer.current.scrollTop}px)`;
				containerRef.current.style.zIndex = `9999`;
			}
		};

		const requestCalculate = () => {
			if (!ticking.current) {
				requestAnimationFrame(calculateTopPosition);
			}

			ticking.current = true;
		};

		React.useEffect(() => {
			if (parentRef && parentRef.current) {
				const {
					left,
					top,
					height
				} = parentRef.current.getBoundingClientRect();

				setPositionLeft(left + pageXOffset);
				setPositionTop(
					isFixed ? top + height : top + pageYOffset + height
				);
				setIsLoaded(true);

				if (scrollableContainer && scrollableContainer.current) {
					scrollableContainer.current.addEventListener(
						"scroll",
						requestCalculate
					);
				}
			}

			return () => {
				if (scrollableContainer && scrollableContainer.current) {
					scrollableContainer.current.removeEventListener(
						"scroll",
						requestCalculate
					);
				}
			};
		}, []);

		return (
			<Portal>
				<div
					ref={containerRef}
					className={cn("kit-overflow-visiblecontainer", className, {
						"kit-overflow-visiblecontainer_fixed": isFixed
					})}
					style={{
						left: positionLeft + "px",
						top: positionTop + "px"
					}}
				>
					{isLoaded && children}
				</div>
			</Portal>
		);
	}
);
