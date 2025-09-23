import Image from "next/image";
import type { CardLayerType } from "@/features/entertainment-card/utils/cardEffectsPresenter";
import {
	createCardLayerStyle,
	getImageClasses,
	getLayerBaseClasses,
	isGifFile,
} from "@/features/entertainment-card/utils/cardEffectsPresenter";
import { getImageSrc } from "../../utils/imageUtils";

type CardLayerProps = {
	layerType: CardLayerType;
	imageSrc: URL;
	imageAlt: string;
	children?: React.ReactNode;
};

const CardLayer = ({
	layerType,
	imageSrc,
	imageAlt,
	children,
}: CardLayerProps) => {
	const layerStyle = createCardLayerStyle(layerType);
	const isMainLayer = layerType === "front";

	const src = getImageSrc(imageSrc);

	return (
		<div className={getLayerBaseClasses()} style={layerStyle}>
			<Image
				src={src}
				alt={isMainLayer ? imageAlt : ""}
				className={getImageClasses(isMainLayer, src)}
				draggable={false}
				fill
				priority
				unoptimized={isGifFile(src)}
			/>
			{children}
		</div>
	);
};

export default CardLayer;
