import type { FC } from "react";
import { useState } from "react";
import { Box } from "@/components/shared/box/Box";
import { OpeningSoonDialog } from "@/features/dashboard/components/opening-soon-dialog/OpeningSoonDialog";
import type { ZindexProps } from "@/types";
import { isFeatureEnabled } from "@/util/featureFlags";

export const TouchPanel: FC<ZindexProps> = ({ className = "" }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleClick = () => {
		if (isFeatureEnabled("openingSoonDialog")) {
			setIsDialogOpen(true);
		}
	};

	return (
		<>
			<Box
				className={`fixed inset-0 cursor-pointer ${className}`}
				onClick={handleClick}
				role="presentation"
				aria-hidden="true"
			/>
			{isFeatureEnabled("openingSoonDialog") && (
				<OpeningSoonDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
			)}
		</>
	);
};
