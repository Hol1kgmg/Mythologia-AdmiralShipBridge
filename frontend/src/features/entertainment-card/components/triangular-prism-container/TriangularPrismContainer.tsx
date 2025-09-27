import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RotatingCard } from "../rotating-card/RotatingCard";

interface TriangularPrismContainerProps {
	rotationY: number;
	shouldShake?: boolean;
}

export const TriangularPrismContainer = ({
	rotationY,
	shouldShake = false,
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

	const cards = [
		{
			id: 1,
			rotation: 0,
			gradient: "from-red-500 to-pink-600",
			title: "カード 1",
			subtitle: "正面 (0°)",
		},
		{
			id: 2,
			rotation: 120,
			gradient: "from-green-500 to-emerald-600",
			title: "カード 2",
			subtitle: "120度",
		},
		{
			id: 3,
			rotation: 240,
			gradient: "from-blue-500 to-indigo-600",
			title: "カード 3",
			subtitle: "240度",
		},
	];

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
				{cards.map((card) => (
					<div
						key={card.id}
						className="absolute"
						style={{
							transform: `rotateY(${card.rotation}deg) translateZ(${translateZ}px)`,
							transformStyle: "preserve-3d",
						}}
					>
						<RotatingCard
							rotationY={0}
							cardWidth={cardWidth}
							cardHeight={cardHeight}
						>
							<div
								className="h-auto w-fit bg-gray-400"
								style={{ height: `${cardHeight}px`, width: `${cardWidth}px` }}
							/>
						</RotatingCard>
					</div>
				))}
			</motion.div>
		</div>
	);
};
