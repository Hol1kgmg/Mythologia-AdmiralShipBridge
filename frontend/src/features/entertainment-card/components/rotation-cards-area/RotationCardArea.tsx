import { type FC, useState } from "react";
import { Typography } from "@/components/shared/typography/Typography";
import type { CardImageInfo } from "@/types";
import { RotationControls } from "../rotation-controls/RotationControls";
import { TriangularPrismContainer } from "../triangular-prism-container/TriangularPrismContainer";

const MAX_ROTATION = 9999;
const MIN_ROTATION = -9999;

type Props = {
	cardList: CardImageInfo[];
	onClick: (card: CardImageInfo) => void;
	onCenterChange?: (centerIndex: number) => void;
};

export const RotationCardArea: FC<Props> = ({
	cardList,
	onClick,
	onCenterChange,
}) => {
	const [rotationY, setRotationY] = useState(0);
	const [shouldShake, setShouldShake] = useState(false);
	const [centerCard, setCenterCard] = useState(cardList[0]);

	const handleRotatePositive = () => {
		const newRotation = rotationY + 120;
		if (newRotation <= MAX_ROTATION) {
			const currentIndex = cardList.findIndex(
				(card) => card.id === centerCard.id,
			);
			const prevIndex = (currentIndex - 1 + cardList.length) % cardList.length;
			setCenterCard(cardList[prevIndex]);
			onCenterChange?.(prevIndex);
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
			const currentIndex = cardList.findIndex(
				(card) => card.id === centerCard.id,
			);
			const nextIndex = (currentIndex + 1 + cardList.length) % cardList.length;
			setCenterCard(cardList[nextIndex]);
			onCenterChange?.(nextIndex);
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
				cardList={cardList}
				centerCard={centerCard}
				onClick={onClick}
			/>

			<Typography
				variant={"p"}
				className="-top-[15vh] pointer-events-none absolute h-full w-full text-4xl"
			>
				{`${centerCard.title}`}
			</Typography>
			{shouldShake && (
				<Typography
					variant={"p"}
					className="-top-[10vh] pointer-events-none absolute h-full w-full text-red-500 text-xl"
				>
					これ以上回せません
				</Typography>
			)}
			<div className="pointer-events-none absolute flex h-full w-full items-center">
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
