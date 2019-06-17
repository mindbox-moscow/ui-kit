import * as React from "react";
import cn from "classnames";

import "./Confirmation.scss";

interface State {
	isVisible?: true;
}

const CLOSE_ANIMATION_TIME = 5000;

export class Confirmation extends React.Component<State> {
	public state = {
		isVisible: false
	};

	public componentDidMount() {
		setTimeout(() => {
			return this.setState({isVisible: false})
		}, CLOSE_ANIMATION_TIME);
	};

    public render() {
        return (
        	<React.Fragment>
				<button onClick={this.onChangeVisible}>Показать</button>
				<div className="kit-confirmation-container" onClick={this.onChangeVisible}>
					<div className={cn("kit-confirmation", {'kit-confirmation_visible': this.state.isVisible})}>
						<p className="kit-confirmation__text">{this.props.children}</p>
					</div>
				</div>
			</React.Fragment>
        );
    }

	private onChangeVisible = () => {
		return this.setState({isVisible: !this.state.isVisible})
	};

}
