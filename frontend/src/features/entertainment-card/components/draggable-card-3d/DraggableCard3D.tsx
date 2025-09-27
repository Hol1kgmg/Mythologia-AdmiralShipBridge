import { createDraggable, utils } from "animejs";
import { type ReactNode, useEffect, useRef, useState } from "react";

type DraggableCard3DProps = {
	children: ReactNode | ((rotationX: number) => ReactNode);
	dragSpeed?: number;
	releaseStiffness?: number;
	containerPadding?: number;
	rotationLimit?: number;
};

const DraggableCard3D = ({
	children,
	dragSpeed = 0.4,
	releaseStiffness = 20,
	containerPadding = 50,
	rotationLimit = 60,
}: DraggableCard3DProps) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const [rotationX, setRotationX] = useState(0);

	useEffect(() => {
		if (!cardRef.current) return;

		utils.set(cardRef.current, { z: 100 });

		const draggableInstance = createDraggable(cardRef.current, {
			trigger: cardRef.current,
			x: {
				mapTo: "rotateY",
				modifier: (value: number) =>
					Math.max(-rotationLimit, Math.min(rotationLimit, value)),
			},
			y: {
				mapTo: "rotateX",
				modifier: (value: number) => {
					const clampedValue = Math.max(
						-rotationLimit,
						Math.min(rotationLimit, -value),
					);
					setRotationX(clampedValue);
					return clampedValue;
				},
			},
			dragSpeed,
			releaseStiffness,
			containerPadding,
			onRelease: () => {
				draggableInstance.reset();
				setRotationX(0);
			},
		});

		return () => {
			if (
				draggableInstance &&
				typeof draggableInstance.disable === "function"
			) {
				draggableInstance.disable();
			}
		};
	}, [dragSpeed, releaseStiffness, containerPadding, rotationLimit]);

	return (
		<div
			ref={cardRef}
			className="relative h-full w-full cursor-grab active:cursor-grabbing"
			style={{
				transformStyle: "preserve-3d",
			}}
		>
			{typeof children === "function" ? children(rotationX) : children}
		</div>
	);
};

export default DraggableCard3D;
