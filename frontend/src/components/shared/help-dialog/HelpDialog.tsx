import { usePathname } from "next/navigation";
import type { FC } from "react";
import { SiteHelpContainer } from "@/components/shared/site-help-container/SiteHelpContainer";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { EntertainmentCardHelpContainer } from "@/features/entertainment-card/components/entertainment-card-help-container/EntertainmentCardHelpContainer";
import type { DialogComponentProps } from "@/types";

export const HelpDialog: FC<DialogComponentProps> = ({
	open,
	onOpenChange,
}) => {
	const pathname = usePathname();

	const renderHelpContent = () => {
		switch (pathname) {
			case "/":
				return <SiteHelpContainer />;
			case "/entertainment-card":
				return <EntertainmentCardHelpContainer />;
			default:
				return <SiteHelpContainer />;
		}
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="flex max-h-[80vh] max-w-[95%] flex-col md:max-w-[600px]">
				<DialogHeader className="flex-shrink-0">
					<DialogTitle className="flex justify-center">
						ヘルプ・使い方
					</DialogTitle>
				</DialogHeader>
				<div className="flex-1 overflow-y-auto">{renderHelpContent()}</div>
			</DialogContent>
		</Dialog>
	);
};
