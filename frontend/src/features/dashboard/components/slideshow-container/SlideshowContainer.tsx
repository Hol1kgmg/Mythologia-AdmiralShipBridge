import type { FC } from "react";
import { useRef } from "react";
import { Wrap } from "@/features/dashboard/components/wrap/Wrap";
import type { ZindexProps } from "@/features/dashboard/types/props";

export const SlideshowContainer: FC<ZindexProps> = ({ className = "" }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const wrapConfigs = [
		{ isOffset: false },
		{ isOffset: true },
		{ isOffset: false },
		{ isOffset: true },
		{ isOffset: false },
	];

	return (
		<div
			ref={containerRef}
			className={`-left-[25%] absolute flex h-[150vh] w-fit origin-top-left rotate-[-25deg] transform-gpu gap-0 overflow-hidden md:left-[25%] ${className}`}
		>
			{wrapConfigs.map((config, index) => (
				<Wrap
					key={`wrap-${config.isOffset ? "offset" : "normal"}-${index}`}
					isOffset={config.isOffset}
					className={className}
					colsIndex={index}
				/>
			))}
		</div>
	);
};
