import CardLayer from "@/features/entertainment-card/components/card-layer/CardLayer";
import { getContainerStyle } from "@/features/entertainment-card/utils/cardEffectsPresenter";
import type { CardImageLoadProps, Simplify } from "@/types";

type CardWith3DEffectsProps = Simplify<
	CardImageLoadProps & {
		className?: string;
	}
>;

const CardWith3DEffects = ({
	cardImageInfo,
	className = "",
}: CardWith3DEffectsProps) => {
	return (
		<div className={`relative ${className}`} style={getContainerStyle()}>
			{/* カード表面の影（厚み効果用） */}
			<CardLayer layerType="shadow1" cardImageInfo={cardImageInfo} />

			{/* カード表面のより深い影 */}
			<CardLayer layerType="shadow2" cardImageInfo={cardImageInfo} />

			{/* カード表面 */}
			<CardLayer layerType="front" cardImageInfo={cardImageInfo} />
		</div>
	);
};

export default CardWith3DEffects;
