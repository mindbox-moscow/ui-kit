import * as React from "react";

export interface WithOusideClickProps {
	onClickOutside: () => void;
	clickOutsideRef?: React.RefObject<HTMLDivElement>;
}

export const withOutsideClick = <T extends {}>(
	Wrapped: React.ComponentType<T>
) => {
	return (props: WithOusideClickProps & T & React.ReactNode) => {
		const refWrapper = React.useRef<HTMLElement>();

		React.useEffect(() => {
			document.addEventListener("mousedown", handleOutsideClick);

			return () => {
				document.removeEventListener("mousedown", handleOutsideClick);
			};
		}, []);

		const handleOutsideClick = (e: MouseEvent) => {
			const { onClickOutside } = props;

			if (
				!(
					refWrapper.current &&
					refWrapper.current.contains(e.target as Node)
				)
			) {
				onClickOutside();
			}
		};

		return <Wrapped {...props} clickOutsideRef={refWrapper} />;
	};
};
