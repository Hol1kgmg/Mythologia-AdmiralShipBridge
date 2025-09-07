import Image from "next/image";
import type { FC } from "react";
import { getContentCardPath, IMAGE_PATHS } from "@/lib/constants";
import { isNullOrUndefined } from "@/util/type-util/typeUtil";

type Props = {
	colsIndex?: number;
	rowsNum?: number;
	className?: string;
};

const getImagePath = (colsIndex?: number, rowsNum?: number): string => {
	if (isNullOrUndefined(colsIndex) || isNullOrUndefined(rowsNum))
		return IMAGE_PATHS.CARD_BACK_SIDE;

	// カード表示を斜めに揃えるための調整
	if (colsIndex === 2) colsIndex = 3;
	else if (colsIndex === 3) colsIndex = 2;

	// 裏面カードを表示する順番のロジック
	if (colsIndex % 2 === 0 && rowsNum % 2 === 0)
		return IMAGE_PATHS.CARD_BACK_SIDE;
	if (colsIndex % 2 === 1 && rowsNum % 2 === 1)
		return IMAGE_PATHS.CARD_BACK_SIDE;

	// イラストカードのNoロジック
	const cardNumber = ((colsIndex * 3 + rowsNum - (colsIndex % 2)) % 15) + 1;
	return getContentCardPath(cardNumber);
};

export const ContentCard: FC<Props> = ({
	colsIndex,
	rowsNum,
	className = "",
}) => {
	const imagePath = getImagePath(colsIndex, rowsNum);

	return (
		<div
			className={`relative h-40 w-[7.5rem] shrink-0 overflow-hidden rounded-lg border-2 border-gray-600 bg-gray-700 shadow-[0_4px_8px_rgba(0,0,0,0.3)] ${className}`}
		>
			<Image
				src={imagePath}
				alt={colsIndex && rowsNum ? `Content card` : "Card back side"}
				fill
				className="object-cover"
				sizes="120px"
			/>
		</div>
	);
};
