"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { FC, ReactNode } from "react";

type AnimationWrapperProps = {
	children: ReactNode;
};

export const AnimationWrapper: FC<AnimationWrapperProps> = ({ children }) => {
	const pathname = usePathname();

	return (
		<motion.div
			key={pathname}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.3,
				ease: "easeInOut",
			}}
			className="h-full w-full"
		>
			{children}
		</motion.div>
	);
};
