import type { CSSProperties } from "react";

type CardLayerType = "shadow1" | "shadow2" | "front";

type CardLayerStyle = {
	transform: string;
	filter?: string;
	opacity?: number;
	zIndex: number;
	backfaceVisibility?: "visible" | "hidden";
};

const createCardLayerStyle = (layerType: CardLayerType): CardLayerStyle => {
	const baseStyles = {
		shadow1: {
			transform: "translateZ(-2px)",
			filter:
				"blur(1px) brightness(1.3) sepia(0.8) saturate(1.5) hue-rotate(15deg)",
			opacity: 0.7,
			zIndex: 1,
		},
		shadow2: {
			transform: "translateZ(-4px)",
			filter:
				"blur(3px) brightness(1.1) sepia(0.7) saturate(1.2) hue-rotate(20deg)",
			opacity: 0.6,
			zIndex: 0,
		},
		front: {
			transform: "translateZ(2px)",
			zIndex: 3,
			backfaceVisibility: "hidden" as const,
		},
	} as const;

	return baseStyles[layerType];
};

const getContainerStyle = (): CSSProperties => ({
	transformStyle: "preserve-3d",
	width: "100%",
	height: "100%",
});

const getLayerBaseClasses = () => "absolute inset-0";

const getImageClasses = (isMainLayer: boolean = false, imageSrc?: string) => {
	const baseClasses = "h-full w-full object-contain";
	let classes = isMainLayer ? `${baseClasses} drop-shadow-lg` : baseClasses;

	if (imageSrc && isGifFile(imageSrc)) {
		classes += " gif-animation";
	}

	return classes;
};

const isGifFile = (src: string): boolean => {
	return src.toLowerCase().endsWith(".gif");
};

export {
	createCardLayerStyle,
	getContainerStyle,
	getLayerBaseClasses,
	getImageClasses,
	isGifFile,
};
export type { CardLayerType, CardLayerStyle };
