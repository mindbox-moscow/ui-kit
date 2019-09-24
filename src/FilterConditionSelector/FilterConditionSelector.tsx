import cn from "classnames";
import * as React from "react";
import { createPortal } from "react-dom";
import { FilterDetails } from "../FilterDetails/FilterDetails";
import { Props, MenuMode, IMenuModeMap, State } from "./types";

import { Input } from "../Input";

import "./FilterConditionSelector.scss";

export class FilterConditionSelector extends React.Component<Props> {
	public state: State = {
		positionTop: 0,
		positionLeft: 0
	};
	private portal = document.createElement("div");

	public componentDidMount() {
		const { portal } = this;
		const { parentRef } = this.props;

		document.body.appendChild(portal);
		portal.classList.add("filter-condition-selector");

		const ref = parentRef.current;
		if (parentRef && ref) {
			const rect = ref.getBoundingClientRect();
			const positionTop = window.pageYOffset + rect.height + rect.top;

			this.setState({
				positionTop,
				positionLeft: rect.left
			});
		}
	}

	public componentWillUnmount() {
		const { portal } = this;

		document.body.removeChild(portal);
	}

	public render() {
		const {
			onSearchTermChange,
			onModeChanged,
			filterLabel,
			recentLabel,
			savedLabel,
			examplesLabel,
			menuMode,
			searchTerm,
			editorComponent,
			helpComponent,
			helpCaption,
			starred,
			toggleStar
		} = this.props;

		const { portal } = this;

		const { positionLeft, positionTop } = this.state;

		const ChildItem = this.props.childRenderer;

		const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			onSearchTermChange(e.target.value);
		};

		const handleMenuModeChange = (mode: MenuMode) => () =>
			onModeChanged(mode);

		const menuModeMap: IMenuModeMap = {
			[MenuMode.Filter]: filterLabel,
			[MenuMode.Recent]: recentLabel,
			[MenuMode.Saved]: savedLabel,
			[MenuMode.Examples]: examplesLabel
		};

		return createPortal(
			<div
				className="kit-filter-condition-selector"
				style={{ left: positionLeft, top: positionTop }}
			>
				<div className="kit-filter-condition-selector__wrap">
					<div className="kit-filter-condition-selector__filter-block">
						<Input
							noShadow={true}
							defaultValue={searchTerm}
							type="search"
							placeholder="Название акции, группы или кампании"
							onChange={handleSearchChange}
						/>
						<div className="kit-filter-condition-selector__filter-btn-block">
							{Object.keys(menuModeMap).map((mode: MenuMode) => {
								return (
									<button
										key={mode}
										type="button"
										className={cn(
											"kit-filter-condition-selector__filter-btn",
											{
												"kit-filter-condition-selector__filter-btn_active":
													menuMode === mode
											}
										)}
										onClick={handleMenuModeChange(mode)}
									>
										{menuModeMap[mode]}
									</button>
								);
							})}
						</div>
					</div>

					<ul className="kit-filter-condition-selector__hierarchy">
						{this.props.rootIds.map(childId => (
							<ChildItem key={childId} id={childId} />
						))}
					</ul>
				</div>

				<FilterDetails
					helpCaption={helpCaption}
					helpComponent={helpComponent}
					editorComponent={editorComponent}
					starred={starred}
					toggleStar={toggleStar}
					viewMode="menu"
				/>
			</div>,
			portal
		);
	}
}
