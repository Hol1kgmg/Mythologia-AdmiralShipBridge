import { motion } from "framer-motion";
import { type FC, useEffect, useState } from "react";
import { CardImageView } from "@/components/shared/card-image-view/CardImageView";
import type { CardImageInfo } from "@/types";
import { RotatingCard } from "../rotating-card/RotatingCard";

interface TriangularPrismContainerProps {
	rotationY: number;
	shouldShake?: boolean;
	cardList: CardImageInfo[];
	centerCard: CardImageInfo;
	onClick: (card: CardImageInfo) => void;
}

export const TriangularPrismContainer: FC<TriangularPrismContainerProps> = ({
	rotationY,
	shouldShake = false,
	cardList,
	centerCard,
	onClick,
}: TriangularPrismContainerProps) => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const updateWindowWidth = () => {
			setWindowWidth(window.innerWidth);
		};

		// 初期値設定
		updateWindowWidth();

		// リサイズイベント監視
		window.addEventListener("resize", updateWindowWidth);
		return () => window.removeEventListener("resize", updateWindowWidth);
	}, []);

	// カードサイズの動的計算（50vwと240pxの小さい方）
	const cardWidth = Math.min(240, windowWidth * 0.5);
	const cardHeight = cardWidth * (300 / 240); // 4:5のアスペクト比を維持
	const translateZ = cardWidth * 0.5; // カード幅の半分を三角柱の半径とする

	const handleClick = (card: CardImageInfo) => {
		console.log("クリック");
		if (centerCard.id !== card.id) return;
		console.log("成功");
		onClick(card);
	};

	return (
		<div
			className={`relative w-[80vw] md:w-[50vw]`}
			style={{ perspective: "1000px" }}
		>
			<motion.div
				className="relative"
				style={{
					transformStyle: "preserve-3d",
					width: `${cardWidth}px`,
					maxWidth: "80vw",
					height: `${cardHeight}px`,
					margin: "0 auto",
				}}
				animate={{
					rotateY: rotationY,
					x: shouldShake ? [0, -5, 5, -3, 3, -1, 1, 0] : 0,
					y: shouldShake ? [0, -2, 2, -1, 1, 0] : 0,
				}}
				transition={{
					duration: shouldShake ? 0.5 : 0.8,
					ease: shouldShake ? "easeInOut" : "easeInOut",
				}}
			>
				{cardList.map((card) => (
					<div
						key={card.id}
						className="absolute"
						style={{
							transform: `rotateY(${(card.id - 1) * 120}deg) translateZ(${translateZ}px)`,
							transformStyle: "preserve-3d",
						}}
					>
						<RotatingCard
							rotationY={0}
							cardWidth={cardWidth}
							cardHeight={cardHeight}
						>
							<button type="button" onClick={() => handleClick(card)}>
								<CardImageView
									cardImageInfo={card}
									width={cardWidth}
									height={cardHeight}
									// onLoad={handleImageLoad} // TODO
									maxHeightPercent={100}
								/>
							</button>
						</RotatingCard>
					</div>
				))}
			</motion.div>
		</div>
	);
};
