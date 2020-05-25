import * as React from "react";

export function useCombinedRefs<T>(
	currentRef: React.RefObject<T>,
	innerRef?: React.RefObject<T>
) {
	const targetRef = React.useRef<T | null>(null);

	React.useEffect(
		() => {
			if (innerRef) {
				targetRef.current = innerRef.current;
			} else {
				targetRef.current = currentRef.current;
			}
		},
		[currentRef, innerRef]
	);

	return targetRef;
}
