import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { AnimationWrapper } from "@/components/shared/animation-wrapper/AnimationWrapper";
import { CoverScreen } from "@/components/shared/cover-screen/CoverScreen";
import { Header } from "@/components/shared/header/Header";
import { OrientationGuide } from "@/components/shared/orientation-guide/OrientationGuide";
import PathBasedScreen from "@/components/shared/path-based-screen/PathBasedScreen";
import "./globals.css";

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
});

// TODO: サイト設定は今後変更される可能性があります
// 以下の項目は実装状況に合わせて更新してください：
// 1. description - 実装される機能に合わせて詳細化
// 2. keywords - SEO戦略に合わせて調整
// 3. verification.google - Google Search Console設定時

// 環境に応じたベースURLを取得
const getBaseUrl = (): string => {
	// 開発環境では localhost を使用
	if (process.env.NODE_ENV === "development") {
		return "http://localhost:3000";
	}
	// ステージング・本番環境では環境変数を使用
	return process.env.NEXT_PUBLIC_FRONTEND_BASE_URL || "https://localhost:3000";
};

// サイトの基本情報
const siteConfig = {
	name: "神託のメソロギア - 非公式ファンサイト",
	title: "神託のメソロギア - Admiral Ship Bridge",
	description:
		"神託のメソロギア（Mythologia）のカード情報データベースとデッキ構築をサポートする非公式Webアプリケーション。カード検索、デッキ構築ツールを提供します。",
	url: getBaseUrl(),
	ogImage: `${getBaseUrl()}/images/og-image.png`,
	// TODO: キーワードは実装機能・SEO戦略に合わせて調整
	keywords: [
		"神託のメソロギア", // コアキーワード
		"Mythologia", // 英語表記
		"メソロギア", // 略称
		"カードゲーム", // ジャンル
		"TCG", // Trading Card Game
		"デッキ構築", // 主要機能
		"カードデータベース", // 主要機能
		"非公式", // 重要：公式との区別
		"ファンサイト", // カテゴリ
		"Admiral Ship Bridge", // サイト名
		// TODO: 実装後に追加予定のキーワード
		// "カード検索", "デッキシミュレーター", "戦略ガイド",
		// "リーダー", "種族", "コンボ", "メタ", "攻略"
	],
};

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	creator: "Mythologia Fan Community",
	publisher: "Mythologia Fan Community",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	alternates: {
		canonical: siteConfig.url,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "ja_JP",
		url: siteConfig.url,
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.title,
			},
		],
	},
	verification: {
		google: "HRAp0G5wBvo6hIaPdCfsfNMo_LZ65Dj-vPlBmZ0go_k",
		// other: {
		//   'msvalidate.01': 'bing-verification-code-here', // TODO: Bing Webmaster Tools設定時
		// },
	},
	category: "Gaming",
	classification: "Fan Site",
	referrer: "origin-when-cross-origin",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="ja">
			<head>
				<link rel="manifest" href="/manifest.json" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>
				{/* Twitter Cards - name属性で指定 */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@mythologia_asb" />
				<meta name="twitter:creator" content="@mythologia_asb" />
				<meta name="twitter:title" content={siteConfig.title} />
				<meta name="twitter:description" content={siteConfig.description} />
				<meta
					name="twitter:image"
					content={`${siteConfig.ogImage}?v=${Date.now()}`}
				/>
				<meta name="twitter:image:alt" content={siteConfig.title} />
				<meta name="twitter:image:width" content="1200" />
				<meta name="twitter:image:height" content="630" />

				{/* 明示的なOGPタグ追加（スマホ表示改善） */}
				<meta
					property="og:image"
					content={`${siteConfig.ogImage}?v=${Date.now()}`}
				/>
				<meta
					property="og:image:secure_url"
					content={`${siteConfig.ogImage}?v=${Date.now()}`}
				/>
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
			</head>
			<body className={`dark antialiased ${geistMono.variable}`}>
				<OrientationGuide />
				<Header />
				<div className="fixed inset-0 h-screen w-screen bg-gray-900">
					<CoverScreen />

					<PathBasedScreen />
					<AnimationWrapper>{children}</AnimationWrapper>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
