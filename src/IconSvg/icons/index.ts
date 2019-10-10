import { ArrowRight } from "./ArrowRight";
import { CatalogTree } from "./CatalogTree";
import { Close } from "./Close";
import { Coins } from "./Coins";
import { Dots } from "./Dots";
import { Magnifier } from "./Magnifier";
import { PercentRound } from "./PercentRound";
import { Trash } from "./Trash";
import { Extended } from "./Extended";
import { Favorite } from "./Favorite";
import { Warning } from "./Warning";
import { SegmentExtend } from "./SegmentExtend";
import { SegmentEdit } from "./SegmentEdit";
import { SegmentContent } from "./SegmentContent";

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
	| "favorite"
	| "warning"
	| "segment-extend"
	| "segment-edit"
	| "segment-content";

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
	favorite: Favorite,
	warning: Warning,
	"segment-extend": SegmentExtend,
	"segment-edit": SegmentEdit,
	"segment-content": SegmentContent
};

export { icons, IconType, ISvgProps };
