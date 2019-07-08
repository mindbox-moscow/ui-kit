import * as React from "react";
import { IconSvg } from "../IconSvg";

import "./PromotionEditContainer.scss";

interface IProps {
	children: React.ReactNode;
}

interface IPropsContainer {
	closeBtnLabel: string;
	children: React.ReactNode;
	onCloseClick: (e: React.MouseEvent) => void;
}

const Header = ({ children }: IProps) => (
	<div className="kit-promotion-edit-container__header">{children}</div>
);

const Main = ({ children }: IProps) => (
	<div className="kit-promotion-edit-container__main">{children}</div>
);

const Footer = ({ children }: IProps) => (
	<div className="kit-promotion-edit-container__footer">{children}</div>
);

const PromotionEditContainer = ({
	closeBtnLabel,
	children,
	onCloseClick
}: IPropsContainer) => (
	<div className="kit-promotion-edit-container">
		{children}
		<button
			className="kit-promotion-edit-container__close"
			aria-label={closeBtnLabel}
			type="button"
			onClick={onCloseClick}
		>
			<IconSvg
				className="kit-promotion-edit-container__close-icon"
				type="close"
			/>
		</button>
	</div>
);

PromotionEditContainer.Header = Header;
PromotionEditContainer.Main = Main;
PromotionEditContainer.Footer = Footer;

export { PromotionEditContainer };
