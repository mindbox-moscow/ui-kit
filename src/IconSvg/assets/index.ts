import catalogTree from "./catalog-tree.svg";
import close from "./close.svg";
import coins from "./coins.svg";
import dots from "./dots.svg";
import glasses from "./glass.svg"
import percentRound from "./percent-round.svg";

type IconType = "catalog-tree" | "close" | "coins" | "dots" | "percent-round" | "glasses";

type AssetsType = { [key in IconType]: string };

const assets: AssetsType = {
	"catalog-tree": catalogTree,
	close,
	coins,
	dots,
	glasses,
	"percent-round": percentRound
};

export { assets, IconType };
