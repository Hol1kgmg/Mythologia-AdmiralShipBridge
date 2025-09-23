import type { FC } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type BoxProps = {
	showCard?: boolean;
} & React.ComponentProps<typeof Card>;

export const Box: FC<BoxProps> = ({
	showCard = false,
	className,
	...props
}) => {
	return (
		<Card
			className={cn(
				!showCard && "border-transparent bg-transparent shadow-none",
				className,
			)}
			{...props}
		/>
	);
};

export {
	CardContent as BoxContent,
	CardDescription as BoxDescription,
	CardFooter as BoxFooter,
	CardHeader as BoxHeader,
	CardTitle as BoxTitle,
};

export type { BoxProps };
