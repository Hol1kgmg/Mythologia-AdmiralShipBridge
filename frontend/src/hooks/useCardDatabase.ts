import { useQuery } from "@tanstack/react-query";
import {
	EntertainmentCardName,
	getEntertainmentCardPath,
} from "@/lib/constants";
import type { CardImageInfo } from "@/types/cardDataTypes";

// 現在は静的データだが、将来的にはAPIから取得
const fetchCardDatabase = async (): Promise<CardImageInfo[]> => {
	// TODO: 将来的にはAPI呼び出しに変更
	// const response = await fetch('/api/cards/metadata');
	// return response.json();

	// 現在は静的データを返す
	return [
		{
			id: 1,
			title: EntertainmentCardName.Nekomata.label,
			src: getEntertainmentCardPath(EntertainmentCardName.Nekomata.file),
			alt: EntertainmentCardName.Nekomata.file,
		},
		{
			id: 2,
			title: EntertainmentCardName.Nun.label,
			src: getEntertainmentCardPath(EntertainmentCardName.Nun.file),
			alt: EntertainmentCardName.Nun.file,
		},
		{
			id: 3,
			title: EntertainmentCardName.Gogon.label,
			src: getEntertainmentCardPath(EntertainmentCardName.Gogon.file),
			alt: EntertainmentCardName.Gogon.file,
		},
	];
};

export const useCardDatabase = () => {
	return useQuery({
		queryKey: ["cardDatabase"],
		queryFn: fetchCardDatabase,
		staleTime: 30 * 60 * 1000, // 30分
		gcTime: 60 * 60 * 1000, // 1時間
	});
};
