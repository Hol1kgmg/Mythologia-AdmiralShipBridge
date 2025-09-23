"use client";
import { useState } from "react";
import { CardImageView } from "@/components/shared/card-image-view/CardImageView";
import {
	EntertainmentCardName,
	getEntertainmentCardPath,
} from "@/lib/constants";
import DraggableCardView from "./draggable-card-view/DraggableCardView";

const EntertainmentCardContainer = () => {
	const [isCardVisible, setIsCardVisible] = useState(false);

	const handleClick = () => {
		setIsCardVisible(!isCardVisible);
	};

	return (
		// z-[var(--z-index-1)]
		<div className="relative flex min-h-screen items-center justify-center">
			{!isCardVisible && (
				<div className="text-center">
					<h1 className="mb-8 font-bold text-2xl text-white">
						アニメカード - ぬん
					</h1>
					<div className="perspective-1000 flex items-center justify-center">
						<button type="button" onClick={handleClick}>
							<CardImageView
								src={getEntertainmentCardPath(EntertainmentCardName.Nekomata)}
								alt="moving card"
								width={200}
								height={200}
							/>
						</button>
					</div>
					<p className="mt-8 text-sm text-white opacity-80">
						カードをクリックして3D回転させてみてください
					</p>
				</div>
			)}
			{/* z-[var(--z-index-2)]*/}
			{isCardVisible && (
				<div className="absolute inset-0 z-50">
					<DraggableCardView
						imageSrc={getEntertainmentCardPath(EntertainmentCardName.Nekomata)}
						imageAlt="moving card"
						onBackgroundClick={handleClick}
					/>
				</div>
			)}
		</div>
	);
};

export default EntertainmentCardContainer;
