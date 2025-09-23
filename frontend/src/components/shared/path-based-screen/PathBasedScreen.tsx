"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Paths } from "@/lib/paths";
import LightRaysScreen from "../light-rays/LightRaysScreen";

const ScreenRouteMap = {
	ENTERTAINMENT_CARD: {
		path: Paths.ENTERTAINMENT_CARD,
		component: <LightRaysScreen />,
		exact: false, // 完全一致かどうか（デフォルト: false = startsWith）
	},
};

const useMatchedRoute = (pathname: string): ReactNode => {
	const matchedConfig = Object.values(ScreenRouteMap).find((config) =>
		config.exact ? pathname === config.path : pathname.startsWith(config.path),
	);

	return matchedConfig?.component ?? null;
};

export const PathBasedScreen = (): ReactNode => {
	const pathname = usePathname();

	// 条件に合うURLパスの場合、専用Screenを返す
	return <>{useMatchedRoute(pathname)}</>;
};

export default PathBasedScreen;
