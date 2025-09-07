import type { FC } from "react";
import { Wrap } from "@/features/dashboard/components/wrap/Wrap";
import type { ZindexProps } from "@/features/dashboard/types/props";

export const SlideshowContainer: FC<ZindexProps> = ({ className = "" }) => {
	const wrapConfigs = [
		{ isOffset: false },
		{ isOffset: true },
		{ isOffset: false },
		{ isOffset: true },
		{ isOffset: false },
	];

	return (
		<div
			className={`-translate-y-1/4 flex h-[80rem] w-full min-w-[50rem] rotate-[-25deg] transform-gpu gap-0 overflow-hidden md:translate-x-2/5 ${className}`}
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
