import React, { useState } from "react";

import { MenuMode } from "../../../src/FilterConditionSelector";
import {
	allElementsDictionary,
	createChildRenderer
} from "./constans/editorButtonData";
import { FilterConditionEditorButtonTest } from "./FilterConditionEditorButtonTest";

export const EditorButtonTest = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [selectedId, setSelectedId] = useState("name");
	const [expansionState, setExpansionState] = useState({
		behaviour: false,
		personalData: false,
		secondCategory: false,
		thirdCategory: false
	});
	const [rootIds] = useState([
		"customerFeatures",
		"behaviour",
		"newsletters",
		"shopping",
		"loyaltyProgram"
	]);

	const onPreviousSelected = (id: string) => (): boolean => {
		let callBack = null;

		if (selectedId === "name") {
			callBack = false;
		} else {
			rootIds.forEach((key, index) => {
				if (key === id) {
					if (index !== 0) {
						setSelectedId(rootIds[index - 1]);
						callBack = true;
					} else {
						setSelectedId("name");
						callBack = false;
					}
				}
			});
		}
		return callBack || false;
	};

	const onNextSelected = (id: any) => () => {
		if (selectedId === "name") {
			setSelectedId(rootIds[0]);
		} else {
			rootIds.map((key, index) => {
				if (key === id && index + 1 < rootIds.length) {
					setSelectedId(rootIds[index + 1]);
				}
			});
		}
	};

	const togglePopup = () => {
		setShowPopup(prev => !prev);
	};

	const onToggleExpand = (id: any) => () => {
		setExpansionState(prev => ({
			...prev,
			...{ [id]: !([id] || false) }
		}));
	};

	const onSelect = (id: any) => {
		setSelectedId(id);
	};

	const state = {
		showPopup,
		// tslint:disable-next-line:object-literal-sort-keys
		selectedId,
		expansionState,
		rootIds
	}

	return (
		<FilterConditionEditorButtonTest
			label="Добавить фильтр"
			isOpened={showPopup}
			toggleOpen={togglePopup}
			onPreviousSelected={onPreviousSelected(selectedId)}
			onNextSelected={onNextSelected(selectedId)}
			onExpandCurrent={onToggleExpand(selectedId)}
			childRenderer={createChildRenderer(
				onSelect,
				onToggleExpand,
				state
			)}
			rootIds={rootIds}
			helpComponent={allElementsDictionary[selectedId].helpComponent}
			editorComponent={allElementsDictionary[selectedId].editorComponent}
			helpCaption={allElementsDictionary[selectedId].helpCaption}
			filterLabel="Фильтры"
			recentLabel="Недавние"
			savedLabel="Сохранённые"
			examplesLabel="Примеры"
			menuMode={MenuMode.Filter}
		/>
	);
};
