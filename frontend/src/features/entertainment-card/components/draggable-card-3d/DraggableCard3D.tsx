"use client";
import { createDraggable, utils } from "animejs";
import { type ReactNode, useEffect, useRef } from "react";

type DraggableCard3DProps = {
	children: ReactNode;
	width: string;
	height: string;
	dragSpeed?: number;
	releaseStiffness?: number;
	containerPadding?: number;
	rotationLimit?: number;
};

const DraggableCard3D = ({
	children,
	width,
	height,
	dragSpeed = 0.4,
	releaseStiffness = 20,
	containerPadding = 50,
	rotationLimit = 60,
}: DraggableCard3DProps) => {
	const cardRef = useRef<HTMLDivElement>(null);

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
				modifier: (value: number) =>
					Math.max(-rotationLimit, Math.min(rotationLimit, -value)),
			},
			dragSpeed,
			releaseStiffness,
			containerPadding,
			onRelease: () => {
				draggableInstance.reset();
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
			className="square relative cursor-grab active:cursor-grabbing"
			style={{
				transformStyle: "preserve-3d",
				width,
				height,
			}}
		>
			{children}
		</div>
	);
};

export default DraggableCard3D;
