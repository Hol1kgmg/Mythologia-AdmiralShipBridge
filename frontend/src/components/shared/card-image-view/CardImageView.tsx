"use client";

import Image from "next/image";
import { type FC, useState } from "react";
import { getImageSrc } from "@/features/entertainment-card/utils/imageUtils";

type Props = {
	src: URL;
	alt: string;
	width: number;
	height: number;
};

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

export const CardImageView: FC<Props> = ({ src, alt, width, height }) => {
	const [hasError, setHasError] = useState(false);

	const imageSrc = getImageSrc(src);

	if (hasError) {
		return (
			<div
				className="bg-gray-500"
				style={{ height: `${height}px`, width: `${width}px` }}
			/>
		);
	}

	return (
		<Image
			src={imageSrc}
			alt={alt}
			width={width}
			height={height}
			onError={() => setHasError(true)}
		/>
	);
};
