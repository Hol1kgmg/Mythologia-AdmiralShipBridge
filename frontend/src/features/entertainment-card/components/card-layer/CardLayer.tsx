import Image from "next/image";
import type { CardLayerType } from "@/features/entertainment-card/utils/cardEffectsPresenter";
import {
	createCardLayerStyle,
	getImageClasses,
	getLayerBaseClasses,
} from "@/features/entertainment-card/utils/cardEffectsPresenter";
import type { CardImageLoadProps, Simplify } from "@/types";

type CardLayerProps = Simplify<
	CardImageLoadProps & {
		layerType: CardLayerType;
		filter?: string;
	}
>;

const CardLayer = ({ layerType, cardImageInfo, filter }: CardLayerProps) => {
	const layerStyle = createCardLayerStyle(layerType);
	const isMainLayer = layerType === "front";

	const isGif = cardImageInfo.src.toLowerCase().includes(".gif");

	return (
		<div className={getLayerBaseClasses()} style={layerStyle}>
			<Image
				src={cardImageInfo.src}
				alt={isMainLayer ? cardImageInfo.alt : ""}
				className={getImageClasses(isMainLayer, cardImageInfo.src)}
				style={filter ? { filter } : undefined}
				draggable={false}
				unoptimized={isGif}
				fill
				priority
			/>
		</div>
	);
};

export default CardLayer;
