import * as React from "react";
import "./Page.scss";
import { TextLine } from "../TextLine/TextLine";
import { Badge } from "../Badge/Badge";
import { COLORS } from "../utils/constants";

interface Props {
	title: string;
	description: string;
	hasBadge?: boolean;
	badgeTitle: string;
	badgeDate?: string;
	badgeBgColor?: COLORS;

	/**
	 * If set, makes title editable
	 */
	onChangeTitle?: (value: string) => void;

	/**
	 * If set, makes description editable
	 */
	onChangeDescription?: (value: string) => void;
}

export class Page extends React.Component<Props> {
	state = {
		title: this.props.title,
		description: this.props.description
	};

	handleChangeTitle = (value: string) => {
		this.setState({ title: value });
		if (this.props.onChangeTitle) {
			this.props.onChangeTitle(value);
		}
	};

	handleChangeDescription = (value: string) => {
		this.setState({ description: value });
		if (this.props.onChangeDescription) {
			this.props.onChangeDescription(value);
		}
	};

	public render() {
		const {
			children,
			hasBadge,
			badgeTitle,
			badgeDate = "",
			badgeBgColor
		} = this.props;
		const { title, description } = this.state;

		const handleTitleChange =
			this.props.onChangeTitle == null
				? ((null as unknown) as (v: string) => void)
				: this.handleChangeTitle;

		const handleChangeDescription =
			this.props.onChangeDescription == null
				? ((null as unknown) as (v: string) => void)
				: this.handleChangeDescription;

		return (
			<div className="kit-page">
				<main className="kit-page__content">
					<div className="kit-page__container">
						<div className="kit-page__content-head">
							<div className="kit-page__title">
								<TextLine
									text={title}
									isTitle
									onChange={handleTitleChange}
								/>
							</div>
							<div className="kit-page__description">
								<TextLine
									text={description}
									onChange={handleChangeDescription}
								/>
							</div>
							{hasBadge && (
								<div className="kit-page__tag">
									<Badge color={badgeBgColor}>
										{badgeTitle} - {badgeDate}
									</Badge>
								</div>
							)}
						</div>
						{children}
					</div>
				</main>
				<footer className="kit-page__footer" />
			</div>
		);
	}
}
