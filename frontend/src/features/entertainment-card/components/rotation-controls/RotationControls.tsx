import { CaretLeft, CaretRight } from "phosphor-react";

interface RotationControlsProps {
	onRotatePositive: () => void;
	onRotateNegative: () => void;
}

export function RotationControls({
	onRotatePositive,
	onRotateNegative,
}: RotationControlsProps) {
	return (
		<div
			className="relative z-[var(--z-index-3)] flex w-full justify-between"
			style={{
				transform: "translateZ(200px)",
				position: "relative",
			}}
		>
			<button
				type="button"
				onClick={onRotatePositive}
				className="relative rounded-full p-2 backdrop-blur-sm transition-colors hover:bg-white/10"
			>
				<CaretLeft size={32} />
			</button>
			<button
				type="button"
				onClick={onRotateNegative}
				className="relative rounded-full p-2 backdrop-blur-sm transition-colors hover:bg-white/10"
			>
				<CaretRight size={32} />
			</button>
		</div>
	);
}
