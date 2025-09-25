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
	}
>;

const CardLayer = ({ layerType, cardImageInfo }: CardLayerProps) => {
	const layerStyle = createCardLayerStyle(layerType);
	const isMainLayer = layerType === "front";

	return (
		<div className={getLayerBaseClasses()} style={layerStyle}>
			<Image
				src={cardImageInfo.src}
				alt={isMainLayer ? cardImageInfo.alt : ""}
				className={getImageClasses(isMainLayer, cardImageInfo.src)}
				draggable={false}
				fill
				priority
			/>
		</div>
	);
};

export default CardLayer;
