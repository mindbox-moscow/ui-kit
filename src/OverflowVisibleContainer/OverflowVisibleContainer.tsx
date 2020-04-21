import cn from "classnames";
import * as React from "react";
import { Portal } from "../Portal";
import { Props } from "./types";

import "./OverflowVisibleContainer.scss";
import { OverflowVisibleFixedContext } from "./OverflowVisibleContext";

type Ref = HTMLDivElement;

export const OverflowVisibleContainer = React.forwardRef<Ref, Props>(
	(props, ref) => {
		const {
			parentRef,
			className,
			children
		} = props;

		const isFixed = React.useContext(OverflowVisibleFixedContext);
		
		let isLoaded = false;
		let positionLeft = 0;
		let positionTop = 0;

		if (parentRef && parentRef.current) {
			const {
				top,
				height,
				left
			} = parentRef.current.getBoundingClientRect();

			positionLeft = left + pageXOffset;
			positionTop = isFixed
				? top + height
				: top + pageYOffset + height;
			isLoaded = true;
		}

		return (
			<Portal>
				<div
					ref={ref}
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
