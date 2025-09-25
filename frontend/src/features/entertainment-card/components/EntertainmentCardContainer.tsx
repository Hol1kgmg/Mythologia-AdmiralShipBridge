"use client";
import { useState } from "react";
import { CardImageView } from "@/components/shared/card-image-view/CardImageView";
import { LoadingAnimation } from "@/components/shared/loading-animation/LoadingAnimation";
import {
	EntertainmentCardName,
	getEntertainmentCardPath,
} from "@/lib/constants";
import type { CardImageInfo } from "@/types/cardDataTypes";
import DraggableCardView from "./draggable-card-view/DraggableCardView";

const EntertainmentCardDataList: CardImageInfo[] = [
	{
		src: getEntertainmentCardPath(EntertainmentCardName.Nekomata),
		alt: EntertainmentCardName.Nekomata,
	},
	{
		src: getEntertainmentCardPath(EntertainmentCardName.Nun),
		alt: EntertainmentCardName.Nun,
	},
	{
		src: getEntertainmentCardPath(EntertainmentCardName.Gogon),
		alt: EntertainmentCardName.Gogon,
	},
];

const EntertainmentCardContainer = () => {
	const [isDragCardVisible, setIsDragCardVisible] = useState(false);
	const [loadedImageCount, setLoadedImageCount] = useState(0);

	// TODO: 表示するカードをmapで全部表示にするときにallLoadedも変える
	// const allLoaded = loadedImageCount === EntertainmentCardDataList.length;
	const allLoaded = loadedImageCount === 1;
	const isVisible = allLoaded && !isDragCardVisible;

	const handleClick = () => {
		setIsDragCardVisible(!isDragCardVisible);
	};

	const handleImageLoad = () => setLoadedImageCount((prev) => prev + 1);

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
					className={`z-[var(--z-index-1)] text-center ${isVisible ? "visible" : "invisible"}`}
				>
					<h1 className="mb-8 font-bold text-2xl text-white">
						アニメカード - ぬん
					</h1>
					<div className="perspective-1000 flex items-center justify-center">
						<button type="button" onClick={handleClick}>
							<CardImageView
								cardImageInfo={EntertainmentCardDataList[0]}
								width={200}
								height={200}
								onLoad={handleImageLoad}
								maxHeightPercent={30}
							/>
						</button>
					</div>
					<p className="mt-8 text-sm text-white opacity-80">
						カードをクリックして3D回転させてみてください
					</p>
				</div>

				{/* z-[var(--z-index-2)]*/}
				<div
					className={`absolute inset-0 z-[var(--z-index-2)] ${!isVisible ? "visible" : "invisible"}`}
				>
					<DraggableCardView
						cardImageInfo={EntertainmentCardDataList[0]}
						onBackgroundClick={handleClick}
					/>
				</div>
			</div>
		</>
	);
};

export default EntertainmentCardContainer;
