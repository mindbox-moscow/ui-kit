import { ArrowRight } from "./ArrowRight";
import { CatalogTree } from "./CatalogTree";
import { Close } from "./Close";
import { Coins } from "./Coins";
import { Dots } from "./Dots";
import { Magnifier } from "./Magnifier";
import { PercentRound } from "./PercentRound";
import { Trash } from "./Trash";
import { Extended } from "./Extended";
import { Warning } from "./Warning";
import { SegmentExpand } from "./SegmentExpand";
import { SegmentEdit } from "./SegmentEdit";
import { Filter } from "./Filter";

import { IconsProps } from "../types";

type ISvgProps = {
	className: string;
} & Partial<IconsProps>;

type IconType =
	| "catalog-tree"
	| "close"
	| "coins"
	| "dots"
	| "percent-round"
	| "arrow-right"
	| "magnifier"
	| "trash"
	| "extended"
	| "warning"
	| "segment-expand"
	| "segment-edit"
	| "filter";

type Icons = { [key in IconType]: (props: ISvgProps) => JSX.Element };

const icons: Icons = {
	"arrow-right": ArrowRight,
	"catalog-tree": CatalogTree,
	close: Close,
	coins: Coins,
	dots: Dots,
	magnifier: Magnifier,
	trash: Trash,
	"percent-round": PercentRound,
	extended: Extended,
	warning: Warning,
	"segment-expand": SegmentExpand,
	"segment-edit": SegmentEdit,
	filter: Filter
};

export { icons, IconType, ISvgProps };
