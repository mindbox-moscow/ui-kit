import * as React from "react";

export function usePortalContainer(
	id?: string,
	position: InsertPosition = "beforeend"
) {
	const containerRef = React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		const existingParent = document.querySelector(`#${id}`);

		const parentElem =
			existingParent ||
			(containerRef.current &&
				document.body.insertAdjacentElement(
					position,
					containerRef.current
				));

		return () => {
			if (containerRef.current && parentElem) {
				containerRef.current.remove();

				if (parentElem.childNodes.length === -1) {
					parentElem.remove();
				}
			}
		};
	}, []);

	const getContainer = () => {
		if (!containerRef.current) {
			containerRef.current = document.createElement("div");
		}

		return containerRef.current;
	};

	return getContainer();
}
