import { IconsProps } from "../types";
import { AreaSelection } from "./AreaSelection";
import { ArrowBottom } from "./ArrowBottom";
import { ArrowRight } from "./ArrowRight";
import { Calendar } from "./Calendar";
import { CatalogTree } from "./CatalogTree";
import { Close } from "./Close";
import { Coins } from "./Coins";
import { CrossArrows } from "./CrossArrows";
import { Dots } from "./Dots";
import { Duplicate } from "./Duplicate";
import { Extended } from "./Extended";
import { Filter } from "./Filter";
import { FlipHorizontal } from "./FlipHorizontal";
import { Magnifier } from "./Magnifier";
import { Minus } from "./Minus";
import { Move } from "./Move";
import { PercentRound } from "./PercentRound";
import { Plus } from "./Plus";
import { Question } from "./Question";
import { Revert } from "./Revert";
import { SegmentEdit } from "./SegmentEdit";
import { SegmentExpand } from "./SegmentExpand";
import { Trash } from "./Trash";
import { Warning } from "./Warning";

type ISvgProps = {
	className: string;
} & Partial<IconsProps>;

type IconType =
	| "catalog-tree"
	| "close"
	| "calendar"
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
	| "flip-horizontal"
	| "revert"
	| "move"
	| "plus"
	| "minus";

type Icons = { [key in IconType]: (props: ISvgProps) => JSX.Element };

const icons: Icons = {
	"area-selection": AreaSelection,
	"arrow-bottom": ArrowBottom,
	"arrow-right": ArrowRight,
	calendar: Calendar,
	"catalog-tree": CatalogTree,
	close: Close,
	coins: Coins,
	"cross-arrows": CrossArrows,
	dots: Dots,
	duplicate: Duplicate,
	extended: Extended,
	filter: Filter,
	"flip-horizontal": FlipHorizontal,
	magnifier: Magnifier,
	minus: Minus,
	move: Move,
	"percent-round": PercentRound,
	plus: Plus,
	question: Question,
	revert: Revert,
	"segment-edit": SegmentEdit,
	"segment-expand": SegmentExpand,
	trash: Trash,
	warning: Warning
};

export { icons, IconType, ISvgProps };
