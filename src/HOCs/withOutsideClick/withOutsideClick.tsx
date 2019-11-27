import * as React from "react";

export interface WithOusideProps {
	onClickOutside: () => void;
	clickOutsideRef?: React.RefObject<HTMLDivElement>;
}

export const withOutsideClick = <T extends {}>(
	Wrapper: React.ComponentType<T>
) => {
	return class extends React.PureComponent<T & WithOusideProps> {
		public refWrapper = React.createRef<HTMLElement>();

		public componentDidMount() {
			document.addEventListener("mousedown", this.handleOutsideClick);
		}

		public componentWillUnmount() {
			document.removeEventListener("mousedown", this.handleOutsideClick);
		}

		public handleOutsideClick = (e: MouseEvent) => {
			const refWrapper = this.refWrapper.current;
			const { onClickOutside } = this.props;

			if (!(refWrapper && refWrapper.contains(e.target as Node))) {
				onClickOutside();
			} else {
				return;
			}
		};

		public render() {
			return (
				<Wrapper {...this.props} clickOutsideRef={this.refWrapper} />
			);
		}
	};
};
