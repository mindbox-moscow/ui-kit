import * as React from "react";
import cn from "classnames";

import "./FilterDetails.scss";

interface FilterDetailsProps {
	helpCaption: string;
	helpComponent: React.ReactNode;
	editorComponent: React.ReactNode;
	starred: boolean;
	viewMode: "edit" | "menu";
}

interface CallbackProps {
	toggleStar: () => void;
}

type Props = FilterDetailsProps & CallbackProps;

interface State {
	helpIsExpanded: boolean;
}

export class FilterDetails extends React.Component<Props, State> {
		public render(){
			const { editorComponent, helpComponent, helpCaption, viewMode } = this.props;

			return (
				<div className={cn("kit-filter-details", {
					"kit-filter-details_editor": viewMode === "edit"
				})}>
					<h2 className="kit-filter-details__title">
						{helpCaption}
					</h2>
					{editorComponent && (
						<div className="kit-filter-details__editor-wrapper">
							{editorComponent}
						</div>
					)}
					{helpComponent && (
						<div className="kit-filter-details__help-wrapper-text">
							{helpComponent}

							<div className="kit-filter-details__gradient-hide"
								 onClick={(e: any) => {
									 e.currentTarget.classList.add("kit-filter-details__gradient-hide_none")
								 }}
							>
								<div className="kit-filter-details__show-btn"
								>
									<img src="https://placehold.it/10x10/red" alt=""/>
								</div>
							</div>
						</div>
					)}
				</div>
			);
		}
};

export default FilterDetails;
