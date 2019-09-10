import cn from "classnames";
import * as React from "react";

import "./FiltrationGroupComponent.scss";

type GroupType = "and" | "or";

interface Props {
	groupType: GroupType; // тип группы: И или ИЛИ
	andLabel: string; // лейбл для И
	orLabel: string; // лейбл для ИЛИ
	shouldShowLabel?: boolean; // нужно ли отображать лейбл на брекете группы
	children: React.ReactNode[]; // условия фильтрации внутри группы. могут быть FiltrationGroupComponent или FiltrationConditionComponent
}

export class FiltrationGroupComponent extends React.Component<Props> {
	private kitFiltrationRef = React.createRef<HTMLUListElement>();
	private kitFiltrationLabelRef = React.createRef<HTMLDivElement>();

	public moveLabelAtCenterOfBracket = () => {
		const ref = this.kitFiltrationRef.current;

		if (ref) {
			const label: HTMLElement | null = ref.querySelector(
				".kit-filtration-group__label"
			);
			if (label && ref.lastElementChild) {
				let offset = 2;
				if (
					ref.lastElementChild.classList.contains(
						"kit-filtration-group"
					)
				) {
					offset = 33;
				}
				label.style.height = `${ref.clientHeight -
					ref.lastElementChild.clientHeight +
					offset}px`;
			}
		}
	};

	public handleHoverAddClassLabel = () => {
		const labelRef = this.kitFiltrationLabelRef.current;
		if (labelRef) {
			labelRef.parentElement!.classList.add("kit-filtration-group_hover");
		}
	};

	public handleHoverRemoveClassLabel = () => {
		const labelRef = this.kitFiltrationLabelRef.current;
		if (labelRef) {
			labelRef.parentElement!.classList.remove(
				"kit-filtration-group_hover"
			);
		}
	};

	public componentDidMount() {
		setTimeout(() => {
			this.moveLabelAtCenterOfBracket();
		}, 1);

		const labelRef = this.kitFiltrationLabelRef.current;
		if (labelRef) {
			labelRef.addEventListener(
				"mouseover",
				this.handleHoverAddClassLabel
			);
			labelRef.addEventListener(
				"mouseout",
				this.handleHoverRemoveClassLabel
			);
		}
	}

	public componentWillUnmount() {
		const labelRef = this.kitFiltrationLabelRef.current;
		if (labelRef) {
			labelRef.removeEventListener(
				"mouseover",
				this.handleHoverAddClassLabel
			);
			labelRef.removeEventListener(
				"mouseout",
				this.handleHoverRemoveClassLabel
			);
		}
	}

	public componentDidUpdate() {
		this.moveLabelAtCenterOfBracket();
	}

	public render() {
		const {
			groupType,
			andLabel,
			orLabel,
			shouldShowLabel,
			children
		} = this.props;

		const labelMap = {
			or: orLabel,
			and: andLabel
		};

		return (
			<ul ref={this.kitFiltrationRef} className="kit-filtration-group">
				<div
					ref={this.kitFiltrationLabelRef}
					className={cn("kit-filtration-group__label", {
						[`kit-filtration-group__label_${groupType}`]: shouldShowLabel
					})}
				>
					<div className="kit-filtration-group__label-line" />
					{shouldShowLabel && (
						<span className="kit-filtration-group__label-text">
							{labelMap[groupType]}
						</span>
					)}
				</div>
				{children}
			</ul>
		);
	}
}
