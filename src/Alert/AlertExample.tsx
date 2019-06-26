import * as React from "react";
import { Button } from "../Button";
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
			<Button onClick={this.hideAlert} color="gray" size="medium">
				Отменить
			</Button>
		</div>
	);

	public render() {
		const { showAlert } = this.state;

		return (
			<>
				<Button
					onClick={this.showAlert}
					color="gray"
					size="medium"
					hasBorder={true}
				>
					Показать уведомление
				</Button>
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
