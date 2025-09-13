"use client";

import type { FC } from "react";
import { CoverScreen } from "@/components/shared/cover-screen/CoverScreen";
import { CharacterImage } from "@/features/dashboard/components/character-image/CharacterImage";
import { SlideshowContainer } from "@/features/dashboard/components/slideshow-container/SlideshowContainer";
import { TitleSection } from "@/features/dashboard/components/title-section/TitleSection";
import { TouchPanel } from "@/features/dashboard/components/touch-panel/TouchPanel";
import type { SiteInfo } from "@/features/dashboard/types/types";

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
			<TouchPanel className="z-[var(--z-index-5)]" />
		</>
	);
};
