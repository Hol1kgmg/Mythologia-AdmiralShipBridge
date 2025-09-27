"use client";

import { useState } from "react";
import { LoadingAnimation } from "@/components/shared/loading-animation/LoadingAnimation";
import { useCardImage, useVisibleCardImages } from "@/hooks/useCardImage";
import {
	EntertainmentCardName,
	getEntertainmentCardPath,
} from "@/lib/constants";
import type { CardImageInfo } from "@/types/cardDataTypes";
import DraggableCardView from "./draggable-card-view/DraggableCardView";
import { RotationCardArea } from "./rotation-cards-area/RotationCardArea";

const EntertainmentCardDataList: CardImageInfo[] = [
	{
		id: 1,
		title: EntertainmentCardName.Nekomata.label,
		src: getEntertainmentCardPath(EntertainmentCardName.Nekomata.file),
		alt: EntertainmentCardName.Nekomata.file,
	},
	{
		id: 2,
		title: EntertainmentCardName.Nun.label,
		src: getEntertainmentCardPath(EntertainmentCardName.Nun.file),
		alt: EntertainmentCardName.Nun.file,
	},
	{
		id: 3,
		title: EntertainmentCardName.Gogon.label,
		src: getEntertainmentCardPath(EntertainmentCardName.Gogon.file),
		alt: EntertainmentCardName.Gogon.file,
	},
];

const EntertainmentCardContainer = () => {
	const [isDragCardVisible, setIsDragCardVisible] = useState(false);
	const [dragCardData, setDragCardData] = useState<CardImageInfo>(
		EntertainmentCardDataList[0],
	);
	const [centerIndex, setCenterIndex] = useState(0);

	// 段階的画像プリロード - 表示中のカード + 前後1枚をプリロード
	const cardImageData = EntertainmentCardDataList.map((card) => ({
		id: card.id.toString(),
		src: card.src,
	}));
	const imageQueries = useVisibleCardImages(cardImageData, centerIndex, 1);

	// DragCardView用の画像プリロード状態
	const dragCardImageQuery = useCardImage(
		dragCardData.id.toString(),
		dragCardData.src,
		isDragCardVisible,
	);

	const allLoaded =
		imageQueries.totalCount > 0 &&
		imageQueries.loadedCount === imageQueries.totalCount;
	const showMainCard = allLoaded && !isDragCardVisible;
	const showDragCard =
		allLoaded && isDragCardVisible && dragCardImageQuery.data;

	const handleClick = (dragCard: CardImageInfo) => {
		// 同期的な状態更新でフラッシュを防ぐ
		setDragCardData(dragCard);
		setIsDragCardVisible(true);
	};

	const handleCenterChange = (newCenterIndex: number) => {
		setCenterIndex(newCenterIndex);
	};

	return (
		<>
			{/* ローディング画面 */}
			{!allLoaded && (
				<div className="fixed inset-0 z-[var(--z-index-5)] h-screen w-screen">
					<LoadingAnimation />
				</div>
			)}

			{/* メインコンテンツ */}
			<div className="relative flex min-h-screen items-center justify-center">
				<div
					className={`z-[var(--z-index-1)] text-center ${showMainCard ? "visible" : "invisible"}`}
				>
					<RotationCardArea
						cardList={EntertainmentCardDataList}
						onClick={handleClick}
						onCenterChange={handleCenterChange}
					/>
				</div>

				{/* z-[var(--z-index-2)]*/}
				<div
					className={`absolute inset-0 z-[var(--z-index-2)] ${showDragCard ? "visible" : "invisible"}`}
				>
					<DraggableCardView
						cardImageInfo={dragCardData}
						onBackgroundClick={() => setIsDragCardVisible(false)}
					/>
				</div>
			</div>
		</>
	);
};

export default EntertainmentCardContainer;
