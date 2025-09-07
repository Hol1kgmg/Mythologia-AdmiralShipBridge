import type { FC } from "react";
import { ContentCard } from "@/features/dashboard/components/content-card/ContentCard";

type Props = {
	isOffset?: boolean;
	className?: string;
	colsIndex?: number;
};

export const Slideshow: FC<Props> = ({
	isOffset = false,
	className = "",
	colsIndex = 1,
}) => {
	const animationClass = isOffset
		? "animate-[loop-slide-offset_15s_infinite_linear]"
		: "animate-[loop-slide_15s_infinite_linear]";

	return (
		<div
			className={`flex min-h-[63rem] flex-col gap-2 ${animationClass} ${className}`}
		>
			{[1, 2, 3, 4, 5, 6].map((rowsNum) => {
				return (
					<ContentCard
						key={rowsNum}
						colsIndex={colsIndex}
						rowsNum={rowsNum}
						className={className}
					/>
				);
			})}
		</div>
	);
};
