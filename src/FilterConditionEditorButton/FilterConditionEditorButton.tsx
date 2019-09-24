import * as React from "react";
import {
	FilterConditionSelector,
	Props as SelectorProps
} from "../FilterConditionSelector";
import { Props as ButtonProps } from "./types";

import "./FilterConditionEditorButton.scss";

type Props = ButtonProps & SelectorProps;

export const FilterConditionEditorButton = (props: Props) => {
	const ref = React.createRef() as React.RefObject<HTMLButtonElement>;

	const {
		toggleOpen,
		label,
		isOpened,
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
		toggleStar,
		childRenderer,
		rootIds
	} = props;

	return (
		<div className="kit-filter-editor">
			<button
				ref={ref}
				className="kit-filter-editor__btn"
				type="button"
				onClick={toggleOpen}
			>
				{label}
			</button>
			{isOpened && (
				<FilterConditionSelector
					parentRef={ref}
					onModeChanged={onModeChanged}
					onSearchTermChange={onSearchTermChange}
					filterLabel={filterLabel}
					recentLabel={recentLabel}
					savedLabel={savedLabel}
					editorComponent={editorComponent}
					examplesLabel={examplesLabel}
					menuMode={menuMode}
					searchTerm={searchTerm}
					helpComponent={helpComponent}
					helpCaption={helpCaption}
					starred={starred}
					toggleStar={toggleStar}
					childRenderer={childRenderer}
					rootIds={rootIds}
				/>
			)}
		</div>
	);
};
