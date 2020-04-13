import cn from "classnames";
import * as React from "react";
import { Portal } from "../Portal";
import { Props } from "./types";

import "./OverflowVisibleContainer.scss";

type Ref = HTMLDivElement;

export const OverflowVisibleContainer = React.forwardRef<Ref, Props>(
	(props, ref) => {
		const {
			parentRef,
			className,
			isFixed: fixed = false,
			children
		} = props;

		const [positionLeft, setPositionLeft] = React.useState<number | string>(
			0
		);
		const [positionTop, setPositionTop] = React.useState<number | string>(
			0
		);
		const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

		React.useEffect(() => {
			handleShowPopup();
		});

		const handleShowPopup = () => {
			if (parentRef && parentRef.current) {
				const {
					top,
					height,
					left
				} = parentRef.current.getBoundingClientRect();
				const windowScrollY = window.scrollY;
				const reactTop: number | string = fixed
					? top + height
					: windowScrollY + top + height;
				const rectLeft: number | string = left;

				if (reactTop !== positionTop || rectLeft !== positionLeft) {
					setPositionLeft(rectLeft);
					setPositionTop(reactTop);
					setIsLoaded(true);
				}
			}
		};

		return (
			<Portal>
				<div
					ref={ref}
					className={cn("kit-overflow-visiblecontainer", className, {
						"kit-overflow-visiblecontainer_fixed": fixed
					})}
					style={{
						left: positionLeft,
						top: positionTop
					}}
				>
					{isLoaded && children}
				</div>
			</Portal>
		);
	}
);
