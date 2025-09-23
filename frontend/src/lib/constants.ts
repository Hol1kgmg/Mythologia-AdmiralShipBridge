/**
 * 画像パス定数
 * プロジェクト全体で使用される静的アセットパスを一元管理
 */

// 画像ベースパス
export const IMAGE_BASE_PATH = "/images";

// 画像パス定数
export const IMAGE_PATHS = {
	CARD_BACK_SIDE: `${IMAGE_BASE_PATH}/CardBackSide.jpg`,
	NUN_MYTHOLOGIA: `${IMAGE_BASE_PATH}/Nun_Mythologia_image.png`,
	CONTENT_CARDS: `${IMAGE_BASE_PATH}/content-cards`,
	ENTERTAINMENT_CARDS: `${IMAGE_BASE_PATH}/entertainment-cards`,
} as const;

// ヘルパー関数
export const getContentCardPath = (cardNumber: number): string =>
	`${IMAGE_PATHS.CONTENT_CARDS}/ContentCard-${cardNumber}.jpg`;

// entertaiment-card用の定数
export const EntertainmentCardName = {
	Nun: "nun.gif",
	Gogon: "gogon.gif",
	Nekomata: "nekomata.gif",
} as const;

type EntertainmentCardType =
	(typeof EntertainmentCardName)[keyof typeof EntertainmentCardName];

export const getEntertainmentCardPath = (
	cardName: EntertainmentCardType,
): URL =>
	new URL(
		`${IMAGE_PATHS.ENTERTAINMENT_CARDS}/EntertainmentCard-${cardName}`,
		import.meta.url,
	);
