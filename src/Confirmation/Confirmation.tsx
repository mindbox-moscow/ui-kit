import * as React from "react";
import "./Confirmation.scss";

export class Confirmation extends React.Component {
    public render() {
        return (
			<div className="kit-confirmation">
				<p className="kit-confirmation__text">{this.props.children}</p>
			</div>
        );
    }
}
