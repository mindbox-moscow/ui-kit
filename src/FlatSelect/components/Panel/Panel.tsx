import cn from "classnames";
import * as React from "react";
import { Width } from "../../../utils";
import { Utils } from "../../modules";
import { PanelEventObject, PanelProps } from "./types";

export class Panel extends React.Component<PanelProps> {
	public panelRef = React.createRef<HTMLDivElement>();

	private defaultExternalInnerElementClasses: string[] = [
		"ui-icon-circle-triangle-e",
		"ui-icon-circle-triangle-w",
		"ui-datepicker-next",
		"ui-datepicker-prev"
	];

	private allowedTargetClickIds: string[] = ["ui-datepicker-div"];

	// TODO: поправить багу: если одна панель находится внутри другой, то при клике на внешнюю панель, внутренняя не скрывается.
	// Настоящий-при-настоящий публичный метод. Используется в dropdown.jsx -> renderPanel.
	public clickEventHandler = (event: PanelEventObject) => {
		// Здесь игнорируется widthOverride, потому что мы хотим отслеживать события "клик хедера"
		// только по клику на дропдаун, к которому привязана текущая панель.

		let clickedInPanel = false;

		// В случае, если мы обрабатываем клик мышки для вложенного дропдауна (в другой дропдаун),
		// мы проверяем, что произошел клик вне данной панели.
		// В случае обычного дропдауна, любой клик вне *любой* (**совсем любой**) панели закрывает
		// данную панель.
		if (this.props.isNested) {
			const parentNode = this.panelRef.current!.parentNode;

			if (parentNode) {
				clickedInPanel = Utils.Instance.isDescendant(
					parentNode,
					event.target
				);
			}
		}

		this.allowedTargetClickIds
			.concat(this.props.isNested ? [] : ["dropdown-overlay"])
			.forEach(id => {
				clickedInPanel =
					clickedInPanel ||
					Utils.Instance.isDescendant(
						document.getElementById(id) as Node,
						event.target
					);
			});

		const target = event.target as HTMLElement;
		this.defaultExternalInnerElementClasses.forEach(c => {
			clickedInPanel = clickedInPanel || target.classList.contains(c);
		});
	};

	public render() {
		const { className, width } = this.props;

		return (
			<div
				className={cn(
					"kit-selectR-drop",
					"kit-overflow-isnt-neutral-zone-marker",
					className,
					`${String(width && Width.getClass(width))}`
				)}
				ref={this.panelRef}
			>
				{this.props.children}
			</div>
		);
	}
}
