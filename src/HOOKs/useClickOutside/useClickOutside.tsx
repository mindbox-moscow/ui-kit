import * as React from "react";

export function useClickOutside(
	ref: React.RefObject<HTMLElement>,
	handler: (e: MouseEvent) => void
) {
	React.useEffect(
		() => {
			const listner = (event: MouseEvent) => {
				const target = event.target as HTMLElement;
				if (!(ref.current && ref.current.contains(target))) {
					handler(event);
				}

				return;
			};

			document.addEventListener("mousedown", listner);

			return () => {
				document.removeEventListener("mousedown", listner);
			};
		},
		[ref, handler]
	);
}
