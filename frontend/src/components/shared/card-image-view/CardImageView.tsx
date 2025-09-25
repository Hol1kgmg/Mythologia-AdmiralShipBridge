"use client";

import Image from "next/image";
import { type FC, useState } from "react";
import type { CardImageLoadProps, Simplify } from "@/types";

type Props = Simplify<
	CardImageLoadProps & {
		width: number;
		height: number;
		isVisible?: boolean;
		maxWidthPercent?: number;
		maxHeightPercent?: number;
		priority?: boolean;
	}
>;

/**
 * CardImageView - 画像表示とエラーハンドリングを行うコンポーネント
 *
 * 注意: 外部ホスト（https://example.com等）のURLを使用する場合は、
 * next.config.jsでimages.domainsまたはimages.remotePatterns設定が必要です。
 * 設定されていないホストのURLはNext.js Imageコンポーネントで拒否され、
 * onErrorハンドラが実行されません。
 *
 * 設定例:
 * // next.config.ts
 * module.exports = {
 *   images: {
 *     domains: ['example.com'], // 古い設定方法
 *     // または
 *     remotePatterns: [
 *       { protocol: 'https', hostname: 'example.com' }
 *     ]
 *   }
 * }
 */

export const CardImageView: FC<Props> = ({
	cardImageInfo,
	width,
	height,
	onLoad = () => {},
	onError = () => {},
	isVisible = true,
	maxWidthPercent = 80,
	maxHeightPercent = 80,
	priority = false,
}) => {
	const [hasError, setHasError] = useState(false);

	const visibilityClass = isVisible ? "visible" : "invisible";

	const handleError = () => {
		setHasError(true);
		onError();
	};

	// TODO: カードサイズに合うようにサイズを調整
	if (hasError) {
		return (
			<div
				className={`bg-gray-500 ${visibilityClass}`}
				style={{ height: `${height}px`, width: `${width}px` }}
			/>
		);
	}

	const isGif = cardImageInfo.src.toLowerCase().includes(".gif");

	return (
		<Image
			src={cardImageInfo.src}
			alt={cardImageInfo.alt}
			className={`${visibilityClass}`}
			width={width}
			height={height}
			style={{
				maxWidth: `${maxWidthPercent}vw`,
				maxHeight: `${maxHeightPercent}vh`,
				width: "auto",
				height: "auto",
			}}
			unoptimized={isGif}
			priority={priority}
			onLoad={onLoad}
			onError={handleError}
		/>
	);
};
