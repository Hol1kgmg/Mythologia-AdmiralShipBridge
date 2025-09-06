import type { FC } from "react";

type Props = {
	imageNumber?: number;
	className?: string;
};

export const ContentCard: FC<Props> = ({ imageNumber, className = "" }) => {
	const backgroundImage = imageNumber
		? `url('https://picsum.photos/120/160?random=${imageNumber}')`
		: undefined;

	return (
		<div
			className={`h-40 w-[7.5rem] shrink-0 rounded-lg border-2 border-gray-600 bg-center bg-cover bg-gray-700 bg-no-repeat shadow-[0_4px_8px_rgba(0,0,0,0.3)] ${className}`}
			style={{ backgroundImage }}
		/>
	);
};
