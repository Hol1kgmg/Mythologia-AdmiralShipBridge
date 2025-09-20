import Image from "next/image";
import type { FC } from "react";
import { Typography } from "@/components/shared/typography/Typography";
import type { SiteInfo } from "@/features/dashboard/types/types";
import type { Simplify, ZindexProps } from "@/types";

type Props = Simplify<
	ZindexProps & {
		siteInfo: SiteInfo;
	}
>;

const titleImageWidth = 1343;
const titleImageHeight = 472;
const titleImageScale = 1.3;

export const TitleSection: FC<Props> = ({ zIndex, siteInfo }) => {
	const getFontStyle = (type: "subtitle" | "description") => {
		const styles = {
			subtitle: "font-medium text-2xl md:text-[clamp(1rem,min(3vw,4vh),2rem)]",
			description: "text-2xl md:text-[clamp(1rem,min(4vw,5vh),2.4rem)]",
		};
		return styles[type];
	};
	return (
		<div
			className={`absolute inset-0 flex flex-col items-center justify-center md:inset-auto md:top-[25%] md:right-[7vw] md:max-w-[65%] md:items-end md:justify-start ${zIndex}`}
		>
			<div className="text-center">
				<div className={`mb-2.5 text-gray-300 ${getFontStyle("subtitle")}`}>
					{siteInfo.subtitle}
				</div>
				<div className="mb-5 flex justify-center">
					<Image
						src={`${siteInfo.titleImagePath}`}
						alt="Mythologia Admiral Ship Bridge"
						width={titleImageWidth * titleImageScale}
						height={titleImageHeight * titleImageScale}
						className="w-auto max-w-[90%] md:max-h-[30vh] md:max-w-[60vw]"
						priority
					/>
				</div>
				<div className={`text-gray-200 ${getFontStyle("description")}`}>
					{siteInfo.description}
				</div>
			</div>

			<div
				className={`md:-bottom-[70%] mt-[20%] flex h-fit w-full justify-center`}
			>
				<Typography
					variant={"p"}
					className="animate-pulse-strong text-center md:text-2xl"
				>
					&mdash; &emsp; Touch Start &emsp; &mdash;
				</Typography>
			</div>
		</div>
	);
};
