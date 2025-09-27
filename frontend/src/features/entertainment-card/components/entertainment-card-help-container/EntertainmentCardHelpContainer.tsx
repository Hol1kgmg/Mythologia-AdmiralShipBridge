import type { FC } from "react";
import { Typography } from "@/components/shared/typography/Typography";

export const EntertainmentCardHelpContainer: FC = () => {
	return (
		<div className="mt-4 space-y-4">
			<div>
				<Typography variant="h4" className="mb-2">
					このページについて
				</Typography>
				<Typography variant="p" className="text-muted-foreground">
					Mythologia Admiral Ship Bridgeのデモページです。
					<br />
					このページでは、3枚のカードが三角柱状に配置され、左右の矢印ボタンで回転できます。
					表示されているカード名が画面上部に表示されます。
				</Typography>
			</div>

			<div>
				<Typography variant="h4" className="mb-2">
					基本操作
				</Typography>
				<ul className="space-y-1 text-muted-foreground">
					<li>
						• <strong>左矢印（←）</strong>：カードを左に回転
					</li>
					<li>
						• <strong>右矢印（→）</strong>：カードを右に回転
					</li>
					<li>
						• <strong>カードクリック</strong>
						：正面のカードをクリックすると拡大表示
					</li>
					<li>
						• <strong>背景クリック</strong>：拡大表示を閉じる
					</li>
				</ul>
			</div>

			<div>
				<Typography variant="h4" className="mb-2">
					カード3D操作機能
				</Typography>
				<ul className="space-y-1 text-muted-foreground">
					<li>• 正面のカードをクリックすると全画面で拡大表示</li>
					<li>• 拡大表示中はドラッグで位置を調整可能</li>
					<li>• 画面の任意の場所をクリックで元の画面に戻る</li>
					<li>• 各カードのエフェクトが楽しめます</li>
				</ul>
			</div>

			<div>
				<Typography variant="h4" className="mb-2">
					注意
				</Typography>
				<Typography variant="p" className="text-muted-foreground">
					カード3D操作機能は他のカードでも使えるようにする予定ですが、カードエフェクトに関してはデータ量が大きく、動作が不安定になるため、このページ以外で導入する予定はありません。
				</Typography>
			</div>
		</div>
	);
};
