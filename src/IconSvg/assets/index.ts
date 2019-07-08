import arrowRight from "./arrow.svg";
import catalogTree from "./catalog-tree.svg";
import close from "./close.svg";
import coins from "./coins.svg";
import dots from "./dots.svg";
import magnifier from "./magnifier.svg"
import percentRound from "./percent-round.svg";

type IconType = "catalog-tree" | "close" | "coins" | "dots" | "percent-round" | "arrow-right" | "magnifier";

type AssetsType = { [key in IconType]: string };

const assets: AssetsType = {
	"arrow-right": arrowRight,
	"catalog-tree": catalogTree,
	close,
	coins,
	dots,
	magnifier,
	"percent-round": percentRound
};

export { assets, IconType };
