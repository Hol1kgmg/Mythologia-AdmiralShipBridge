import CardLayer from "@/features/entertainment-card/components/card-layer/CardLayer";
import { getContainerStyle } from "@/features/entertainment-card/utils/cardEffectsPresenter";
import type { CardImageLoadProps, Simplify } from "@/types";

type CardWith3DEffectsProps = Simplify<
	CardImageLoadProps & {
		className?: string;
		rotationX?: number;
	}
>;

const CardWith3DEffects = ({
	cardImageInfo,
	className = "",
	rotationX = 0,
}: CardWith3DEffectsProps) => {
	// rotationX角度に基づいて影の強度を計算（下向きの時のみ）
	const calculateShadowOpacity = (rotationX: number): number => {
		// rotationXが正の値（下向き）の時のみ影を適用
		if (rotationX <= 0) return 0;

		// 0度から60度までの範囲で、0から0.6まで線形補間（より暗く）
		const maxRotation = 60;
		const maxOpacity = 0.6;
		const normalizedRotation = Math.min(rotationX, maxRotation) / maxRotation;
		return normalizedRotation * maxOpacity;
	};

	const shadowOpacity = calculateShadowOpacity(rotationX);

	return (
		<div className={`relative ${className}`} style={getContainerStyle()}>
			{/* カード表面の影（厚み効果用） */}
			<CardLayer layerType="shadow1" cardImageInfo={cardImageInfo} />

			{/* カード表面のより深い影 */}
			<CardLayer layerType="shadow2" cardImageInfo={cardImageInfo} />

			{/* X軸回転による動的影レイヤー */}
			{shadowOpacity > 0 && (
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(to bottom, rgba(0,0,0,${shadowOpacity * 0.7}) 0%, rgba(0,0,0,${shadowOpacity}) 100%)`,
						transform: "translateZ(5px)",
						borderRadius: "inherit",
					}}
				/>
			)}

			{/* カード表面 */}
			<CardLayer layerType="front" cardImageInfo={cardImageInfo} />
		</div>
	);
};

export default CardWith3DEffects;
