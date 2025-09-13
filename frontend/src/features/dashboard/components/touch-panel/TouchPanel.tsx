import type { FC } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import type { ZindexProps } from "@/features/dashboard/types/props";

export const TouchPanel: FC<ZindexProps> = ({ className = "" }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div
					className={`fixed inset-0 cursor-pointer bg-orange-500/30 ${className}`}
				/>
			</DialogTrigger>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle>モーダルタイトル</DialogTitle>
					<DialogDescription>
						モーダルの内容がここに表示されます。
					</DialogDescription>
				</DialogHeader>
				<div className="mt-4">
					<p className="text-muted-foreground text-sm">
						このモーダルはRadix UI Dialogで実装されています。
					</p>
				</div>
			</DialogContent>
		</Dialog>
	);
};
