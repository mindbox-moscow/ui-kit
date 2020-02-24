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
import { Duplicate } from "./Duplicate";
import { CrossArrows } from "./CrossArrows";
import { Question } from "./Question";
import { ArrowBottom } from "./ArrowBottom";
import { IconsProps } from "../types";
import { AreaSelection } from "./AreaSelection";
import { FlipHorizontal } from "./FlipHorizontal";
import { Revert } from "./Revert";
import { Move } from "./Move";
import { Plus } from "./Plus";
import { Minus } from "./Minus";

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
	| "filter"
	| "duplicate"
	| "cross-arrows"
	| "question"
	| "arrow-bottom"
	| "area-selection"
	| "flip-horisontal"
	| "revert"
	| "move"
	| "plus"
	| "minus";

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
	filter: Filter,
	duplicate: Duplicate,
	"cross-arrows": CrossArrows,
	question: Question,
	"arrow-bottom": ArrowBottom,
	"area-selection": AreaSelection,
	"flip-horisontal": FlipHorizontal,
	revert: Revert,
	move: Move,
	plus: Plus,
	minus: Minus
};

export { icons, IconType, ISvgProps };
