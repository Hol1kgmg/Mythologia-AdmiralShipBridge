"use client";

import type { FC } from "react";
import { CoverScreen } from "@/components/shared/cover-screen/CoverScreen";
import { SlideshowContainer } from "@/features/dashboard/components/slideshow-container/SlideshowContainer";
import { TitleSection } from "@/features/dashboard/components/title-section/TitleSection";
import type { SiteInfo } from "@/features/dashboard/types/types";
import { CharacterImage } from "./character-image/CharacterImage";

type Props = {
	siteInfo?: SiteInfo;
};

export const TopPage: FC<Props> = ({
	siteInfo = {
		subtitle: "非公式ファンサイト",
		title: "Mythologia Admiral-Ship-Bridge",
		description: "カードデータベース＆デッキ構築",
	},
}) => {
	return (
		<>
			<SlideshowContainer className="z-[var(--z-index-1)]" />
			<CoverScreen className="z-[var(--z-index-2)]" />
			<CharacterImage className="z-[var(--z-index-3)]" />
			<TitleSection className="z-[var(--z-index-4)]" siteInfo={siteInfo} />
		</>
	);
};
