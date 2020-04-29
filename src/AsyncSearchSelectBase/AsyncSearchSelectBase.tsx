import * as React from "react";
import { useEffect, useRef, useState } from "react";
import * as InfiniteScroll from "react-infinite-scroller";

import { Dropdown, SelectionMode, SelectSearchList } from "../FlatSelect";
import { Height } from "../utils";

interface IProps {
	searchText: string;
	headerInfo: string;
	showClearFilter: boolean;
	selectionMode: SelectionMode;
	canLoadMoreDataRightNow: boolean;
	disabled?: boolean;
	height?: Height;
	onSearchChange: (newSearchTerm: string) => void;
	onClearFilter: () => void;
	onLoadNextPortion: () => void;
	makeSelectedComponents?: () => JSX.Element[];
	resetFilterCaption?: string;
	closeCaption?: string;
}

const AsyncSearchSelectBase: React.FC<IProps> = props => {
	const {
		searchText,
		disabled,
		headerInfo,
		showClearFilter,
		children,
		canLoadMoreDataRightNow,
		onLoadNextPortion,
		selectionMode,
		makeSelectedComponents,
		onClearFilter,
		onSearchChange,
		height,
		resetFilterCaption,
		closeCaption
	} = props;

	const selectSearchListRef = useRef<HTMLDivElement>(null);

	const [isOpen, setIsOpen] = useState(false);

	useEffect(
		() => {
			onLoadNextPortion();
		},
		[isOpen]
	);

	const handleClick = () => {
		setIsOpen(prev => !prev);
	};
	const getScrollParent = () => {
		return selectSearchListRef.current;
	};

	return (
		<Dropdown
			isOpen={isOpen}
			onClick={handleClick}
			headerInfo={headerInfo}
			className="form-control_all"
			height={height !== null ? Height.Normal : undefined}
			disabled={disabled}
		>
			<SelectSearchList
				ref={selectSearchListRef}
				headerInfo={showClearFilter ? headerInfo : undefined}
				onInputChange={onSearchChange}
				searchTextValue={searchText}
				clearFilterHandler={showClearFilter ? onClearFilter : undefined}
				shouldSearchTextBeSelected={false}
				makeSelectedComponents={makeSelectedComponents}
				selectionMode={selectionMode}
				resetFilterCaption={resetFilterCaption}
				closeCaption={closeCaption}
			>
				<InfiniteScroll
					getScrollParent={getScrollParent}
					initialLoad={false}
					hasMore={canLoadMoreDataRightNow}
					useWindow={false}
					loadMore={onLoadNextPortion}
				>
					{children}
				</InfiniteScroll>
			</SelectSearchList>
		</Dropdown>
	);
};
export { AsyncSearchSelectBase };
