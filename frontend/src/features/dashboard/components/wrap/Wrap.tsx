import type { FC } from "react";
import { Slideshow } from "@/features/dashboard/components/slideshow/Slideshow";
import type { SlideshowProps } from "@/features/dashboard/types/props";

export const Wrap: FC<SlideshowProps> = ({
	hasImages = false,
	isOffset = false,
	className = "",
}) => {
	return (
		<div
			className={`flex h-[80rem] w-[8.75rem] flex-col justify-center overflow-hidden ${className}`}
		>
			{[1, 2, 3].map((index) => (
				<Slideshow
					key={index}
					hasImages={hasImages}
					isOffset={isOffset}
					className={className}
				/>
			))}
		</div>
	);
};
