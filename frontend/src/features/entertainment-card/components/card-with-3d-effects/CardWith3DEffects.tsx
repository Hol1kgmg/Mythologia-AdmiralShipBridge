import CardLayer from "@/features/entertainment-card/components/card-layer/CardLayer";
import { getContainerStyle } from "@/features/entertainment-card/utils/cardEffectsPresenter";
import type { CardImageLoadProps, Simplify } from "@/types";

type CardWith3DEffectsProps = Simplify<
	CardImageLoadProps & {
		className?: string;
		rotationX?: number;
		rotationY?: number;
	}
>;

const CardWith3DEffects = ({
	cardImageInfo,
	className = "",
	rotationX = 0,
	rotationY = 0,
}: CardWith3DEffectsProps) => {
	// rotationX・rotationY角度に基づいてbrightness filterを計算
	const calculateBrightnessFilter = (
		rotationX: number,
		rotationY: number,
	): string | undefined => {
		const maxRotation = 60;
		let brightness = 1.0; // 基準明度

		// X軸の影響（上下の傾き）
		if (rotationX > 0) {
			// 下向きの時：暗くする（1.0 → 0.4）
			const minBrightness = 0.4;
			const normalizedRotation = Math.min(rotationX, maxRotation) / maxRotation;
			brightness *= 1.0 - normalizedRotation * (1.0 - minBrightness);
		} else if (rotationX < 0) {
			// 上向きの時：明るくする（1.0 → 1.2）
			const maxBrightness = 1.2;
			const normalizedRotation =
				Math.min(Math.abs(rotationX), maxRotation) / maxRotation;
			brightness *= 1.0 + normalizedRotation * (maxBrightness - 1.0);
		}

		// Y軸の影響（左右の傾き）- より控えめな効果
		if (Math.abs(rotationY) > 0) {
			const normalizedRotation =
				Math.min(Math.abs(rotationY), maxRotation) / maxRotation;
			// 左右に傾けると少し暗くなる（サイドライティング効果）
			const sideEffect = 0.8; // 最大で10%暗くなる
			brightness *= 1.0 - normalizedRotation * (1.0 - sideEffect);
		}

		// 基準明度(1.0)と変わらない場合はfilterなし
		return Math.abs(brightness - 1.0) > 0.01
			? `brightness(${brightness})`
			: undefined;
	};

	const brightnessFilter = calculateBrightnessFilter(rotationX, rotationY);

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
