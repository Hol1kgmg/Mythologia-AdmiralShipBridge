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
	// rotationX角度に基づいてbrightness filterを計算（下向きの時のみ）
	const calculateBrightnessFilter = (rotationX: number): string | undefined => {
		// rotationXが正の値（下向き）の時のみ暗くする
		if (rotationX <= 0) return undefined;

		// 0度から60度までの範囲で、1.0から0.4まで線形補間（より暗く）
		const maxRotation = 60;
		const minBrightness = 0.4; // 最も暗い時の明度
		const normalizedRotation = Math.min(rotationX, maxRotation) / maxRotation;
		const brightness = 1.0 - normalizedRotation * (1.0 - minBrightness);
		return `brightness(${brightness})`;
	};

	const brightnessFilter = calculateBrightnessFilter(rotationX);

	return (
		<div className={`relative ${className}`} style={getContainerStyle()}>
			{/* カード表面の影（厚み効果用） */}
			<CardLayer layerType="shadow1" cardImageInfo={cardImageInfo} />

			{/* カード表面のより深い影 */}
			<CardLayer layerType="shadow2" cardImageInfo={cardImageInfo} />

			{/* カード表面（X軸回転による動的brightness filter適用） */}
			<CardLayer
				layerType="front"
				cardImageInfo={cardImageInfo}
				filter={brightnessFilter}
			/>
		</div>
	);
};

export default CardWith3DEffects;
