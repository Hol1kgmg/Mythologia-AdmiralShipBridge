export {
	Card as Box,
	CardContent as BoxContent,
	CardDescription as BoxDescription,
	CardFooter as BoxFooter,
	CardHeader as BoxHeader,
	CardTitle as BoxTitle,
} from "@/components/ui/card";

// 型の再エクスポート
import type { Card } from "@/components/ui/card";
export type BoxProps = React.ComponentProps<typeof Card>;
