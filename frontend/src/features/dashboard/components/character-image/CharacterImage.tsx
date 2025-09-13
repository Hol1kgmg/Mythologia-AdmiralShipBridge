import Image from "next/image";
import type { FC } from "react";
import type { ZindexProps } from "@/features/dashboard/types/props";
import { IMAGE_PATHS } from "@/lib/constants";

export const CharacterImage: FC<ZindexProps> = ({ className = "" }) => {
	return (
		<div className={`${className}`}>
			<Image
				src={IMAGE_PATHS.NUN_MYTHOLOGIA}
				alt="Nun Mythologia Character"
				width={1108}
				height={1168}
				className={`absolute bottom-[0%] left-[0%] hidden h-[80vh] max-h-[800px] w-fit max-w-[60%] object-contain md:block ${className}`}
				priority
			/>
		</div>
	);
};
