import { Panel } from "@/components/shared/panel/Panel";
import CardWith3DEffects from "@/features/entertainment-card/components/card-with-3d-effects/CardWith3DEffects";
import DraggableCard3D from "@/features/entertainment-card/components/draggable-card-3d/DraggableCard3D";
import type { CardImageLoadProps, Simplify } from "@/types";

type DraggableCardViewProps = Simplify<
	CardImageLoadProps & {
		onBackgroundClick: () => void;
		dragSpeed?: number;
		releaseStiffness?: number;
		containerPadding?: number;
		rotationLimit?: number;
		isInvisible?: boolean;
	}
>;

// 画像取得に失敗した場合はこのコンポーネントそのものを表示しない
const DraggableCardView = ({
	cardImageInfo,
	onBackgroundClick,
	dragSpeed = 0.4,
	releaseStiffness = 20,
	containerPadding = 50,
	rotationLimit = 60,
	isInvisible = false,
}: DraggableCardViewProps) => {
	if (isInvisible) return <div />;
	return (
		<>
			<Panel className="z-10 bg-black/70" onClickEvent={onBackgroundClick} />
			<div className="perspective-1000 pointer-events-none relative z-20 flex min-h-screen items-center justify-center p-4">
				<div
					className="pointer-events-auto"
					style={{
						width: "min(460px, min(80vw, calc(80vh * 460 / 575)))",
						height: "min(575px, min(80vh, calc(80vw * 575 / 460)))",
						aspectRatio: "460/575",
					}}
				>
					<DraggableCard3D
						dragSpeed={dragSpeed}
						releaseStiffness={releaseStiffness}
						containerPadding={containerPadding}
						rotationLimit={rotationLimit}
					>
						<CardWith3DEffects cardImageInfo={cardImageInfo} />
					</DraggableCard3D>
				</div>
			</div>
		</>
	);
};

export default DraggableCardView;
