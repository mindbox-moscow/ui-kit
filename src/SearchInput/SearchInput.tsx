import * as React from "react";
import "./SearchInput.scss";
import { IconSvg } from "../IconSvg";
//import { Icon } from "../Icon";

interface Props {
	placeholder?: string;
}

interface State {
	filter?: any;
}

export class SearchInput extends React.Component<Props, State> {

	public state: State = { filter: "" };

	handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ filter: e.target.value });

    public render() {
        const { placeholder } = this.props;

        return (
			<div className="kit-input-search">
				<div className="kit-input-field__search-field">
					<input
						type="text"
						className="kit-input-search__input"
						onChange={this.handleFilter}
						placeholder={placeholder}
					/>
					<span className="kit-input-search__icon">
						<IconSvg type="glasses" />
					</span>
				</div>
			</div>
        );
    }
}
