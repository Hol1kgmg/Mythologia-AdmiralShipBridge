import type { FC } from "react";
import { ContentCard } from "@/features/dashboard/components/content-card/ContentCard";

type Props = {
	hasImages?: boolean;
	isOffset?: boolean;
	className?: string;
};

export const Slideshow: FC<Props> = ({
	hasImages = false,
	isOffset = false,
	className = "",
}) => {
	const animationClass = isOffset
		? "animate-[loop-slide-offset_15s_infinite_linear]"
		: "animate-[loop-slide_15s_infinite_linear]";

	return (
		<div
			className={`flex min-h-[52.5rem] flex-col gap-2 ${animationClass} ${className}`}
		>
			{[1, 2, 3, 4, 5].map((num) => (
				<ContentCard
					key={num}
					imageNumber={hasImages ? num : undefined}
					className={className}
				/>
			))}
		</div>
	);
};
