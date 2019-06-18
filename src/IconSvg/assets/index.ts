import catalogTree from "./catalog-tree.svg";
import coins from "./coins.svg";
import dots from "./dots.svg";
import percentRound from "./percent-round.svg";

type IconType = "catalog-tree" | "coins" | "dots" | "percent-round";

type AssetsType = { [key in IconType]: string };

const assets: AssetsType = {
	"catalog-tree": catalogTree,
	coins,
	dots,
	"percent-round": percentRound
};

export { assets, IconType };
