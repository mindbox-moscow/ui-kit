import * as React from "react";
import { Button as NewButton } from "@mindbox-moscow/ui-components";

import { Alert } from "./Alert";

interface IState {
	showAlert: boolean;
}

export class AlertExample extends React.Component<{}, IState> {
	public state = {
		showAlert: false
	};

	public showAlert = () => this.setState({ showAlert: true });

	public hideAlert = () => this.setState({ showAlert: false });

	public onAlertOutsideClick = () => this.hideAlert();

	public onAlertTimeout = () => this.hideAlert();

	public renderAlertContent = () => (
		<div
			style={{
				alignItems: "center",
				display: "flex",
				justifyContent: "center"
			}}
		>
			<span style={{ marginRight: "14px" }}>
				Группа «При регистрации через приложение» перенесена в группу
				«Акции для новых клиентов»
			</span>
			<NewButton
				size="medium"
				type="primary"
				onClick={this.hideAlert}
			>
				Отменить
			</NewButton>
		</div>
	);

	public render() {
		const { showAlert } = this.state;

		return (
			<>
				<NewButton
					size="medium"
					type="secondary"
					onClick={this.showAlert}
				>
					Показать уведомление
				</NewButton>
				{showAlert && (
					<Alert
						onOutsideClick={this.onAlertOutsideClick}
						onTimeout={this.onAlertTimeout}
						timeout={3000}
						pauseTimeoutOnHover={true}
					>
						{this.renderAlertContent()}
					</Alert>
				)}
			</>
		);
	}
}
