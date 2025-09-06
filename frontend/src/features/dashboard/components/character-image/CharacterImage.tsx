import Image from "next/image";
import type { FC } from "react";
import NunMythologiaImage from "@/features/dashboard/assets/Nun_Mythologia_image.png";
import type { ZindexProps } from "@/features/dashboard/types/props";

export const CharacterImage: FC<ZindexProps> = ({ className = "" }) => {
	return (
		<div
			className={`fixed inset-0 ${className} -translate-x-1/6 hidden translate-y-1/6 md:block`}
		>
			<Image
				src={NunMythologiaImage}
				alt="Nun Mythologia Character"
				className={`relative h-[95vh] w-auto object-contain ${className}`}
				priority
			/>
		</div>
	);
};
