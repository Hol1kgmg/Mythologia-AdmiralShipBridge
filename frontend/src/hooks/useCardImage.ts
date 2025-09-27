import { useQuery } from "@tanstack/react-query";

// 画像プリロード関数
const preloadImage = (src: string): Promise<HTMLImageElement> => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = reject;
		img.src = src;
	});
};

// 個別画像取得用のhook
export const useCardImage = (cardId: string, src: string, enabled = true) => {
	return useQuery({
		queryKey: ["cardImage", cardId],
		queryFn: () => preloadImage(src),
		enabled: enabled && !!src,
		staleTime: 10 * 60 * 1000, // 10分
		gcTime: 15 * 60 * 1000, // 15分後にメモリ解放
		retry: 2,
	});
};

// 複数画像の段階的プリロード用のhook
export const useVisibleCardImages = (
	cards: Array<{ id: string; src: string }>,
	centerIndex: number,
	bufferSize = 1,
) => {
	// 表示中 + 前後bufferSize枚のインデックスを計算
	const visibleIndices = Array.from(
		{ length: Math.min(cards.length, bufferSize * 2 + 1) },
		(_, i) => {
			const index = centerIndex - bufferSize + i;
			return index >= 0 && index < cards.length ? index : null;
		},
	).filter((index): index is number => index !== null);

	// 表示中の画像URLリストを生成
	const visibleImageSrcs = visibleIndices.map((index) => cards[index].src);

	// 複数画像を一括でプリロード
	const queryResult = useQuery({
		queryKey: ["visibleCardImages", visibleImageSrcs],
		queryFn: async () => {
			const results = await Promise.allSettled(
				visibleImageSrcs.map((src) => preloadImage(src)),
			);
			return results;
		},
		enabled: visibleImageSrcs.length > 0,
		staleTime: 10 * 60 * 1000, // 10分
		gcTime: 15 * 60 * 1000, // 15分後にメモリ解放
		retry: 2,
	});

	const loadedCount =
		queryResult.data?.filter((result) => result.status === "fulfilled")
			.length || 0;

	return {
		isLoading: queryResult.isLoading,
		hasError: queryResult.error !== null,
		loadedCount,
		totalCount: visibleImageSrcs.length,
		data: queryResult.data,
	};
};
