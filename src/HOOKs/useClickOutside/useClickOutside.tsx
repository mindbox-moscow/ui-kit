import * as React from "react";

export function useClickOutside(
	ref: React.RefObject<HTMLElement>,
	handler: (e: MouseEvent) => void
) {
	React.useEffect(
		() => {
			const listner = (e: MouseEvent) => {
				const target = e.target as HTMLElement;
				if (!(ref.current && ref.current.contains(target))) {
					handler(e);
				}
			};

			document.addEventListener("click", listner);

			return () => {
				document.removeEventListener("click", listner);
			};
		},
		[ref, handler]
	);
}
