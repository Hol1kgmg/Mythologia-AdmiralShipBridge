"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HelpDialog } from "../help-dialog/HelpDialog";

export const Header = () => {
	const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);

	const handleHelpClick = () => {
		setIsHelpDialogOpen(true);
	};

	return (
		<>
			<header className="fixed top-0 right-0 left-0 z-50">
				<div className="flex items-center justify-between px-6 py-6">
					<div>
						<Link href="/">
							<Image
								src="/images/logo/MythologiaASB_logo.png"
								alt="Mythologia Admiral Ship Bridge"
								width={1343}
								height={472}
								className="h-8 w-auto"
								priority
							/>
						</Link>
					</div>
					<div className="flex items-center gap-5">
						<Link href="/link1" className="text-gray-400 text-sm">
							Link1
						</Link>
						<Link href="/link2" className="text-gray-400 text-sm">
							Link2
						</Link>
						<button
							type="button"
							onClick={handleHelpClick}
							className="transition-opacity hover:opacity-75"
							aria-label="ヘルプを開く"
						>
							<Image
								src="/svg/question.svg"
								alt=""
								width="20"
								height="20"
								className="[filter:brightness(0)_saturate(100%)_invert(58%)_sepia(8%)_saturate(571%)_hue-rotate(205deg)_brightness(97%)_contrast(86%)]"
							/>
						</button>
					</div>
				</div>
			</header>
			<HelpDialog open={isHelpDialogOpen} onOpenChange={setIsHelpDialogOpen} />
		</>
	);
};
