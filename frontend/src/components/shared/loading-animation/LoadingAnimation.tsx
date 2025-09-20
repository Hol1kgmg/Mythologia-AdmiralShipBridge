import Image from "next/image";
import type { FC } from "react";
import { Typography } from "@/components/shared/typography/Typography";
import type { Simplify, ZindexProps } from "@/types";

const defaultSize = 200;

/*
使用例
<div className="relative flex min-h-screen flex-col items-center justify-center">
   <LoadingAnimation zIndex="var(--z-index-2)" imageSize={150} />
</div>
*/

type Props = Simplify<
	ZindexProps & {
		imageSize?: number;
	}
>;

export const LoadingAnimation: FC<Props> = ({
	zIndex,
	imageSize = defaultSize,
}) => {
	return (
		<div
			className={`flex flex-col items-center justify-center ${zIndex || ""}`}
		>
			<div className="relative mb-6">
				<Image
					src="/images/logo/Helm_Symbol_Only.png"
					alt="Loading"
					width={imageSize}
					height={imageSize}
					className="animate-spin-strong"
					priority
				/>
				<Image
					src="/images/logo/Wing_Symbol_Only.png"
					alt="Wing Symbol"
					width={imageSize}
					height={imageSize}
					className="absolute inset-0"
					style={{
						filter:
							"drop-shadow(1px 0 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black)",
					}}
					priority
				/>
			</div>
			<Typography
				variant="p"
				className="animate-pulse text-lg text-muted-foreground"
			>
				Loading now ...
			</Typography>
		</div>
	);
};
