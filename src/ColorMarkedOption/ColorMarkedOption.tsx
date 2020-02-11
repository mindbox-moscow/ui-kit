import * as React from "react";
import { Item } from "./types";

import "./ColorMarkedOption.scss";

interface IProps {
	items: Item[];
}

const ColorMarkedOption = ({ items }: IProps) => {
	return (
		<div className="kit-color-marked-option">
			{items.map(({ title, color }: Item, index) => (
				<div className="kit-color-marked-option__item" key={index}>
					<div
						className="kit-color-marked-option__color"
						style={{ backgroundColor: color }}
					/>
					<span className="kit-color-marked-option__title">
						{title}
					</span>
				</div>
			))}
		</div>
	);
};

export { ColorMarkedOption };
