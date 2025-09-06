import type { FC } from "react";

type Props = {
	className?: string;
};

export const CoverScreen: FC<Props> = ({ className = "" }) => {
	return (
		<div
			className={`fixed inset-0 ${className} h-screen w-screen bg-[rgba(29,20,19,0.67)]`}
		/>
	);
};
