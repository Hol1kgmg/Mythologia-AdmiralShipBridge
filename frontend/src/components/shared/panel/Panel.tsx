"use client";

import type { FC } from "react";
import type { Simplify, ZindexProps } from "@/types";

type Props = Simplify<
	ZindexProps & {
		className?: string;
		onClickEvent?: React.MouseEventHandler<HTMLButtonElement>;
	}
>;

export const Panel: FC<Props> = ({
	zIndex,
	className,
	onClickEvent = () => {},
}) => {
	return (
		<button
			type="button"
			className={`absolute inset-0 ${zIndex} ${className}`}
			onClick={onClickEvent}
		/>
	);
};
