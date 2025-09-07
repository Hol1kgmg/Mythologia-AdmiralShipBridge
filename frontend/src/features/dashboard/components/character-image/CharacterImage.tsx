import Image from "next/image";
import type { FC } from "react";
import type { ZindexProps } from "@/features/dashboard/types/props";
import { IMAGE_PATHS } from "@/lib/constants";

export const CharacterImage: FC<ZindexProps> = ({ className = "" }) => {
	return (
		<div
			className={`fixed inset-0 ${className} -translate-x-1/6 hidden translate-y-1/6 md:block`}
		>
			<Image
				src={IMAGE_PATHS.NUN_MYTHOLOGIA}
				alt="Nun Mythologia Character"
				width={1108}
				height={1168}
				className={`relative h-[95vh] w-auto object-contain ${className}`}
				priority
			/>
		</div>
	);
};
