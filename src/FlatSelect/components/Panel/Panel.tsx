import * as React from "react";
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

	// Грязный хак от select2
	public componentDidMount() {
		document.addEventListener("select2-open", this.handleVisibleSelect);
	}

	public componentDidUpdate(prevProps: PanelProps) {
		if (!prevProps.show) {
			this.panelHeightOverride();
		}
	}

	public componentWillUnmount() {
		document.removeEventListener("select2-open", this.handleVisibleSelect);
	}

	public handleVisibleSelect = (event: PanelEventObject) => {
		if (this.props.show) {
			this.props.clickOutsideEventHandler(event);
		}
	};

	// TODO: поправить багу: если одна панель находится внутри другой, то при клике на внешнюю панель, внутренняя не скрывается.
	// Настоящий-при-настоящий публичный метод. Используется в dropdown.jsx -> renderPanel.
	public clickEventHandler = (event: PanelEventObject) => {
		const position = this.props.boundingRectangle;

		// Здесь игнорируется widthOverride, потому что мы хотим отслеживать события "клик хедера"
		// только по клику на дропдаун, к которому привязана текущая панель.
		let clickedInHeader =
			event.clientX > position.left &&
			event.clientX < position.right &&
			event.clientY > position.top &&
			event.clientY < position.bottom;

		let clickedInPanel = false;
		const targetRect = event.target.getClientRects()[0];
		if (targetRect) {
			clickedInHeader =
				clickedInHeader ||
				(targetRect.left === position.left &&
					targetRect.right === position.right &&
					targetRect.top === position.top &&
					targetRect.bottom === position.bottom);
		} else {
			clickedInPanel = true;
		}

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
		this.defaultExternalInnerElementClasses.forEach(
			c =>
				(clickedInPanel =
					clickedInPanel || target.classList.contains(c))
		);

		if (!clickedInPanel && !clickedInHeader) {
			this.props.clickOutsideEventHandler(event);
		}
	};

	public render() {
		const show = this.props.show;
		const position = this.props.boundingRectangle;
		const width = position.widthOverride || position.width;
		const scrollTop = window.pageYOffset;
		const classesArray = [
			"selectR-drop",
			"kit-overflow-isnt-neutral-zone-marker"
		];

		const styles: React.CSSProperties = {
			bottom: (null as unknown) as string | number,
			display: show ? "block" : "none",
			left: position.left,
			position: "absolute",
			top: (null as unknown) as string | number,
			width
		};

		// Если элемент отрисован в нижней половине экрана
		if (document.body.offsetHeight / 2 < position.top) {
			styles.top = "auto";
			styles.bottom =
				document.body.offsetHeight - scrollTop - position.top;
			classesArray.push("selectR-above");
		} else {
			styles.top = position.bottom + scrollTop;
		}

		if (this.props.className) {
			classesArray.push(this.props.className);
		}

		const classes = classesArray.join(" ");

		return (
			<div className={classes} style={styles} ref={this.panelRef}>
				{this.props.children}
			</div>
		);
	}

	private panelHeightOverride = () => {
		const panel = this.panelRef.current!;
		const panelRect = panel.getBoundingClientRect();
		let cutMaxHeight = 0;

		if (panelRect.top < 0) {
			cutMaxHeight = panelRect.top;
		}

		if (panelRect.bottom > document.body.offsetHeight) {
			cutMaxHeight = document.body.offsetHeight - panelRect.bottom;
		}

		if (cutMaxHeight < 0) {
			// Ищем SelectDropMain и меняем максимальную высоту, минимум 100
			const selectList = panel.querySelector(
				".selectR-drop-main"
			) as HTMLElement;

			const maxHeight = getComputedStyle(selectList).maxHeight;
			const maxHeightStyle = maxHeight && parseInt(maxHeight);
			if (maxHeightStyle && !isNaN(maxHeightStyle)) {
				selectList.style.maxHeight =
					Math.max(cutMaxHeight + maxHeightStyle - 10, 100) + "px";
			}
		}
	};
}
