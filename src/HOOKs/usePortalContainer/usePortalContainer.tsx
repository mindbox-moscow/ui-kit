import * as React from "react";

export function usePortalContainer(
	id?: string,
	position: InsertPosition = "beforeend"
) {
	const containerRef = React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		if (containerRef.current) {
			const existingParent =
				id === undefined ? null : document.querySelector(`#${id}`);

			if (existingParent) {
				existingParent.insertAdjacentElement(
					position,
					containerRef.current
				);
			} else {
				document.body.insertAdjacentElement(
					position,
					containerRef.current
				);
			}
		}

		return () => {
			if (containerRef.current) {
				containerRef.current.remove();
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
