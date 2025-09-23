/**
 * ユーティリティ型: 交差型を読みやすい形に展開する
 */

// TODO: type-festを導入した場合は削除。現在はSimplifyのみ使うので独自定義で対応
export type Simplify<T> = { [K in keyof T]: T[K] } & {};

export type ZindexProps = {
	zIndex?: string;
};

export type DialogComponentProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
};
