import Image from "next/image";
import type { CardLayerType } from "@/features/entertainment-card/util/cardEffectsPresenter";
import {
	createCardLayerStyle,
	getImageClasses,
	getLayerBaseClasses,
	isGifFile,
} from "@/features/entertainment-card/util/cardEffectsPresenter";

type CardLayerProps = {
	layerType: CardLayerType;
	imageSrc: string;
	imageAlt: string;
	width: number;
	height: number;
	children?: React.ReactNode;
};

const CardLayer = ({
	layerType,
	imageSrc,
	imageAlt,
	width,
	height,
	children,
}: CardLayerProps) => {
	const layerStyle = createCardLayerStyle(layerType);
	const isMainLayer = layerType === "front";

	return (
		<div className={getLayerBaseClasses()} style={layerStyle}>
			<Image
				src={imageSrc}
				alt={isMainLayer ? imageAlt : ""}
				className={getImageClasses(isMainLayer, imageSrc)}
				draggable={false}
				width={width}
				height={height}
				priority
				unoptimized={isGifFile(imageSrc)}
			/>
			{children}
		</div>
	);
};

export default CardLayer;
