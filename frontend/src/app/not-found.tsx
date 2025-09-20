import Link from "next/link";
import { CoverScreen } from "@/components/shared/cover-screen/CoverScreen";
import { Typography } from "@/components/shared/typography/Typography";
import { Button } from "@/components/ui/button";

const NotFound = () => {
	return (
		<>
			<CoverScreen className="z-[var(--z-index-1)]" />
			<div className="relative z-[var(--z-index-2)] flex min-h-screen flex-col items-center justify-center text-center">
				<Typography variant="h1" className="mb-4 font-bold text-6xl">
					404
				</Typography>
				<Typography
					variant="h2"
					className="mb-6 border-none pb-0 text-2xl text-gray-300"
				>
					ページが見つかりません
				</Typography>
				<Typography variant="p" className="mt-0 mb-8 text-gray-400">
					お探しのページは存在しないか、移動された可能性があります。
				</Typography>
				<Link href="/">
					<Button>ホームに戻る</Button>
				</Link>
			</div>
		</>
	);
};

export default NotFound;
