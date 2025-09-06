import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const typographyVariants = cva("text-white", {
	variants: {
		variant: {
			h1: "scroll-m-20 text-4xl font-extrabold tracking-tight",
			h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
			h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
			h4: "scroll-m-20 text-xl font-semibold tracking-tight",
			p: "leading-7 [&:not(:first-child)]:mt-6",
		},
	},
	defaultVariants: {
		variant: "p",
	},
});

export type TypographyProps = React.HTMLAttributes<HTMLElement> &
	VariantProps<typeof typographyVariants> & {
		className?: string;
	};

export const Typography = ({
	className,
	variant = "p",
	children,
	...props
}: TypographyProps) => {
	const Component = variant || "p";

	return (
		<Component
			className={cn(typographyVariants({ variant }), className)}
			{...props}
		>
			{children}
		</Component>
	);
};
Typography.displayName = "Typography";
