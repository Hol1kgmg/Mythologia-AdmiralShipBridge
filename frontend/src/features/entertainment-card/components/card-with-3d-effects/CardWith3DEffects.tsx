import CardLayer from "@/features/entertainment-card/components/card-layer/CardLayer";
import { getContainerStyle } from "@/features/entertainment-card/util/cardEffectsPresenter";

type CardWith3DEffectsProps = {
	imageSrc: string;
	imageAlt: string;
	className?: string;
};

const CardWith3DEffects = ({
	imageSrc,
	imageAlt,
	className = "",
}: CardWith3DEffectsProps) => {
	return (
		<div className={`relative ${className}`} style={getContainerStyle()}>
			{/* カード表面の影（厚み効果用） */}
			<CardLayer layerType="shadow1" imageSrc={imageSrc} imageAlt={imageAlt} />

			{/* カード表面のより深い影 */}
			<CardLayer layerType="shadow2" imageSrc={imageSrc} imageAlt={imageAlt} />

			{/* カード表面 */}
			<CardLayer layerType="front" imageSrc={imageSrc} imageAlt={imageAlt} />
		</div>
	);
};

export default CardWith3DEffects;
