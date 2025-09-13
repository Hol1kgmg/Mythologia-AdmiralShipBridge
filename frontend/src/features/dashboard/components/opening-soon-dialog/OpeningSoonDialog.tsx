import type { FC } from "react";
import { Box } from "@/components/shared/box/Box";
import { Typography } from "@/components/shared/typography/Typography";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

type OpeningSoonDialogProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

export const OpeningSoonDialog: FC<OpeningSoonDialogProps> = ({
	open,
	onOpenChange,
}) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-md">
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
						神託のメソロギアユーザーの皆様により良い体験を提供するため、準備中です。
					</Typography>
				</Box>
			</DialogContent>
		</Dialog>
	);
};
