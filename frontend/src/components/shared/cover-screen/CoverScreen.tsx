import type { FC } from "react";
import type { ZindexProps } from "@/types";

export const CoverScreen: FC<ZindexProps> = ({ className = "" }) => {
	return (
		<div
			className={`fixed inset-0 ${className} h-screen w-screen bg-[rgba(29,20,19,0.67)]`}
		/>
	);
};
