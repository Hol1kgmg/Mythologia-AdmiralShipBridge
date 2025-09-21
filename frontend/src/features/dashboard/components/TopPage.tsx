"use client";

import type { FC } from "react";
import { CoverScreen } from "@/components/shared/cover-screen/CoverScreen";
import { CharacterImage } from "@/features/dashboard/components/character-image/CharacterImage";
import { SlideshowContainer } from "@/features/dashboard/components/slideshow-container/SlideshowContainer";
import { TitleSection } from "@/features/dashboard/components/title-section/TitleSection";
import type { SiteInfo } from "@/features/dashboard/types/types";
import { TouchPanel } from "./touch-panel/TouchPanel";

type Props = {
	siteInfo?: SiteInfo;
};

export const TopPage: FC<Props> = ({
	siteInfo = {
		subtitle: "非公式ファンサイト",
		titleImagePath: "/images/logo/MythologiaASB_logo.png",
		description: "カードデータベース＆デッキ構築",
	},
}) => {
	return (
		<>
			<SlideshowContainer zIndex="z-[var(--z-index-1)]" />
			<CoverScreen zIndex="z-[var(--z-index-2)]" />
			<CharacterImage zIndex="z-[var(--z-index-3)]" />
			<TitleSection zIndex="z-[var(--z-index-4)]" siteInfo={siteInfo} />
			<TouchPanel zIndex="z-[var(--z-index-5)]" />
		</>
	);
};
