"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Typography } from "@/components/shared/typography/Typography";

export const OrientationGuide = () => {
	const [_isStandalone, setIsStandalone] = useState<boolean>(false);
	const [showGuide, setShowGuide] = useState<boolean>(false);

	useEffect(() => {
		const checkOrientation = (): void => {
			// シンプルなモバイル判定
			const isMobile =
				/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
					navigator.userAgent,
				) && "ontouchstart" in window;

			if (!isMobile) {
				setShowGuide(false);
				return;
			}

			const standalone: boolean = window.matchMedia(
				"(display-mode: standalone)",
			).matches;

			const isLandscape: boolean = window.matchMedia(
				"(orientation: landscape)",
			).matches;

			setIsStandalone(standalone);
			setShowGuide(isLandscape && !standalone);
		};

		checkOrientation();
		window.addEventListener("orientationchange", checkOrientation);
		window.addEventListener("resize", checkOrientation);

		return (): void => {
			window.removeEventListener("orientationchange", checkOrientation);
			window.removeEventListener("resize", checkOrientation);
		};
	}, []);

	if (!showGuide) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-[var(--z-index-max)] flex items-center justify-center bg-black bg-opacity-50">
			<div className="flex flex-col items-center space-y-4">
				<Image
					src="/images/RotatePhone.png"
					alt="Rotate Phone"
					width={128}
					height={128}
					priority
				/>
				<Typography variant="h2" className="text-white text-xl">
					Rotate Phone
				</Typography>
			</div>
		</div>
	);
};
