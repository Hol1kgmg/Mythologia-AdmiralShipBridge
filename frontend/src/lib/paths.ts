/**
 * アプリケーション全体で使用するパス定義
 *
 * 新しいページを追加する際は、このオブジェクトにパスを定義し、
 * 必要に応じてPathBasedScreenのScreenRouteMapにも追加してください。
 */

export const Paths = {
	HOME: "/",
	NOT_FOUND: "/404",
	DASHBOARD: "/dashboard",
	ENTERTAINMENT_CARD: "/entertainment-card",
} as const;

export type Paths = typeof Paths;
