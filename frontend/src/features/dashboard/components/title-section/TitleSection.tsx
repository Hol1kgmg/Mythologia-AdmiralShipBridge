import type { FC } from "react";
import type { SiteInfo } from "@/features/dashboard/types/types";

type Props = {
	className?: string;
	siteInfo: SiteInfo;
};

export const TitleSection: FC<Props> = ({ className = "", siteInfo }) => {
	return (
		<div
			className={`fixed inset-0 ${className} flex flex-col items-center justify-center md:mt-40 md:mr-[7vw] md:items-end md:justify-start`}
		>
			<div className="text-center">
				<div className="mb-2.5 font-medium text-2xl text-gray-300 md:text-3xl">
					{siteInfo.subtitle}
				</div>
				<div className="mb-4 font-bold text-4xl text-white leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] md:text-6xl">
					{siteInfo.title.split(" ").map((word) => (
						<span key={word}>
							{word}
							<br />
						</span>
					))}
				</div>
				<div className="font-bold text-2xl text-gray-200 md:text-4xl">
					{siteInfo.description}
				</div>
			</div>
		</div>
	);
};
