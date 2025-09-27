import { useState } from "react";
import { Typography } from "@/components/shared/typography/Typography";
import { RotationControls } from "../rotation-controls/RotationControls";
import { TriangularPrismContainer } from "../triangular-prism-container/TriangularPrismContainer";

const MAX_ROTATION = 9999;
const MIN_ROTATION = -9999;

export const RotationCardArea = () => {
	const [rotationY, setRotationY] = useState(0);
	const [shouldShake, setShouldShake] = useState(false);

	const handleRotatePositive = () => {
		const newRotation = rotationY + 120;
		if (newRotation <= MAX_ROTATION) {
			setRotationY(newRotation);
		} else {
			// 制限を超えた場合は震えアニメーションをトリガー
			setShouldShake(true);
			setTimeout(() => setShouldShake(false), 500);
		}
	};

	const handleRotateNegative = () => {
		const newRotation = rotationY - 120;
		if (newRotation >= MIN_ROTATION) {
			setRotationY(newRotation);
		} else {
			// 制限を超えた場合は震えアニメーションをトリガー
			setShouldShake(true);
			setTimeout(() => setShouldShake(false), 500);
		}
	};

	return (
		<div className="relative flex items-center justify-center">
			<TriangularPrismContainer
				rotationY={rotationY}
				shouldShake={shouldShake}
			/>

			<Typography
				variant={"p"}
				className="-top-[15vh] absolute h-full w-full text-4xl"
			>
				ヌン
			</Typography>
			<div className="absolute flex h-full w-full items-center">
				<RotationControls
					onRotatePositive={handleRotatePositive}
					onRotateNegative={handleRotateNegative}
				/>
			</div>
			<Typography
				variant={"p"}
				className="-bottom-[35vh] md:-bottom-[40vh] absolute h-full w-full text-gray-400 text-xl"
			>
				カードをクリックして3D回転させてみてください
			</Typography>
		</div>
	);
};
