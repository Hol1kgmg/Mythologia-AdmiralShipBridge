import Link from "next/link";
import type { FC } from "react";
import { Box } from "@/components/shared/box/Box";
import { Typography } from "@/components/shared/typography/Typography";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type { DialogComponentProps } from "@/types";

export const OpeningSoonDialog: FC<DialogComponentProps> = ({
	open,
	onOpenChange,
}) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-[95%]">
				<DialogHeader>
					<DialogTitle className="flex justify-center">
						Comming Soon
					</DialogTitle>
				</DialogHeader>
				<Box className="mt-4">
					<Typography
						variant="p"
						className="text-center text-md text-muted-foreground"
					>
						『神託のメソロギア』ユーザーの皆様により良い体験を提供するため、準備中です。
					</Typography>
					<Link href="/entertainment-card" className="text-gray-400 text-sm">
						<Typography
							variant="p"
							className="text-center text-blue-400 text-sm underline hover:text-blue-300"
						>
							デモページ
						</Typography>
					</Link>
				</Box>
			</DialogContent>
		</Dialog>
	);
};
