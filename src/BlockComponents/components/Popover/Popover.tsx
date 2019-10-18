import * as React from "react";

import "./Popover.scss";

interface State {
	isOpen: boolean;
}

interface Props {
	buttonCaptionOpen: string;
	buttonCaptionClose: string;
}

export class Popover extends React.Component<Props, State> {
	public state = {
		isOpen: false
	};

	public handleOpenPopover = () => {
		this.setState(state => ({ isOpen: !state.isOpen }));
	};

	public render() {
		const { isOpen } = this.state;
		const { buttonCaptionOpen, buttonCaptionClose, children } = this.props;

		return (
			<div className="kit-popover">
				{isOpen && (
					<div className="kit-popover__content">{children}</div>
				)}

				<button
					className="kit-popover__button"
					type="button"
					onClick={this.handleOpenPopover}
				>
					{isOpen ? buttonCaptionClose : buttonCaptionOpen}
				</button>
			</div>
		);
	}
}
