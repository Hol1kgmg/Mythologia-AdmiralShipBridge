import { motion } from "framer-motion";

interface RotatingCardProps {
	className?: string;
	children?: React.ReactNode;
	autoRotate?: boolean;
	rotationY?: number; // Y軸回転角度を外部から制御
	cardWidth?: number; // カード幅を外部から制御
	cardHeight?: number; // カード高さを外部から制御
}

export function RotatingCard({
	className = "",
	children,
	autoRotate = false,
	rotationY = 0,
	cardWidth = 240,
	cardHeight = 300,
}: RotatingCardProps) {
	return (
		<div className="perspective-1000" style={{ perspective: "1000px" }}>
			<motion.div
				className={`cursor-pointer ${className}`}
				style={{
					height: `${cardHeight}px`,
					width: `${cardWidth}px`,
					maxWidth: "50vw",
					transformStyle: "preserve-3d",
				}}
				animate={{
					rotateY: rotationY,
					...(autoRotate && {
						rotateY: [0, 360],
						rotateX: [0, 15, 0],
					}),
				}}
				transition={{
					duration: autoRotate ? 4 : 0.6,
					repeat: autoRotate ? Infinity : 0,
					ease: autoRotate ? "linear" : "easeInOut",
				}}
			>
				{children || (
					<div className="flex h-full w-full items-center justify-center">
						<div className="rounded-lg bg-white/20 p-4 backdrop-blur-sm">
							<div className="mb-2 h-16 w-16 rounded-full bg-white/30"></div>
							<div className="mb-1 h-2 rounded bg-white/40"></div>
							<div className="h-2 w-3/4 rounded bg-white/30"></div>
						</div>
					</div>
				)}
			</motion.div>
		</div>
	);
}
