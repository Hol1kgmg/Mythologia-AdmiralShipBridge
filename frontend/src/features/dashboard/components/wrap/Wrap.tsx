import type { FC } from "react";
import { Slideshow } from "@/features/dashboard/components/slideshow/Slideshow";
import type { SlideshowProps } from "@/features/dashboard/types/props";

export const Wrap: FC<SlideshowProps> = ({
	isOffset = false,
	className = "",
	colsIndex = 1,
}) => {
	return (
		<div
			className={`flex h-[80rem] w-[8.75rem] flex-col justify-center overflow-hidden ${className}`}
		>
			{[1, 2, 3].map((index) => (
				<Slideshow
					key={index}
					isOffset={isOffset}
					className={className}
					colsIndex={colsIndex}
				/>
			))}
		</div>
	);
};
