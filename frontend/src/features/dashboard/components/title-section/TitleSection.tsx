import type { FC } from "react";
import type { SiteInfo } from "@/features/dashboard/types/types";

type Props = {
	className?: string;
	siteInfo: SiteInfo;
};

export const TitleSection: FC<Props> = ({ className = "", siteInfo }) => {
	const getFontStyle = (type: "subtitle" | "title" | "description") => {
		const styles = {
			subtitle: "font-medium text-2xl md:text-[clamp(1rem,min(3vw,4vh),2rem)]",
			title: "font-bold text-4xl md:text-[clamp(1.5rem,min(6vw,8vh),4rem)]",
			description:
				"font-bold text-2xl md:text-[clamp(1rem,min(4vw,5vh),2.4rem)]",
		};
		return styles[type];
	};
	return (
		<div
			className={`absolute inset-0 flex flex-col items-center justify-center md:inset-auto md:top-[25%] md:right-[7vw] md:items-end md:justify-start ${className}`}
		>
			<div className="text-center">
				<div className={`mb-2.5 text-gray-300 ${getFontStyle("subtitle")}`}>
					{siteInfo.subtitle}
				</div>
				<div
					className={`mb-4 text-white leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] ${getFontStyle("title")}`}
				>
					{siteInfo.title.split(" ").map((word) => (
						<span key={word}>
							{word}
							<br />
						</span>
					))}
				</div>
				<div className={`text-gray-200 ${getFontStyle("description")}`}>
					{siteInfo.description}
				</div>
			</div>
		</div>
	);
};
