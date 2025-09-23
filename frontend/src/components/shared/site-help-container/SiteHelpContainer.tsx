import type { FC } from "react";
import { Typography } from "@/components/shared/typography/Typography";

export const SiteHelpContainer: FC = () => {
	return (
		<div className="mt-4 space-y-4">
			<div>
				<Typography variant="h4" className="mb-2">
					サイトについて
				</Typography>
				<Typography variant="p" className="text-muted-foreground">
					Mythologia Admiral Ship
					Bridgeは、『神託のメソロギア』の非公式ファンサイトです。
					カードデータベースやデッキ構築ツールを提供しています。
				</Typography>
			</div>

			<div>
				<Typography variant="h4" className="mb-2">
					基本操作
				</Typography>
				<ul className="space-y-1 text-muted-foreground">
					<li>• ヘッダーのロゴをクリックするとトップページに戻ります</li>
					<li>• 画面をクリックすると各種機能にアクセスできます</li>
					<li>• このヘルプはどのページからでも?アイコンで開けます</li>
				</ul>
			</div>

			<div>
				<Typography variant="h4" className="mb-2">
					お問い合わせ
				</Typography>
				<Typography variant="p" className="text-muted-foreground">
					ご質問やご要望がございましたら、
					<a
						href="https://twitter.com/mythologia_asb"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-400 underline hover:text-blue-300"
					>
						SNSアカウント
					</a>
					からお気軽にお声がけください。
				</Typography>
			</div>
		</div>
	);
};
