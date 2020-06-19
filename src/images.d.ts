/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module "*.png";
declare module "*.jpg";
declare module "*.svg" {
	import * as React from "react";

	export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

	const src: string;
	export default src;
}

declare module "vfile-message" {
	export type VFileMessage = any;
}

declare namespace jest {
	interface Matchers<R> {
		toMatchImageSnapshot(): R;
	}
}
