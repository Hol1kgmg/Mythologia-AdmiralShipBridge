import CardWith3DEffects from "@/features/entertainment-card/components/card-with-3d-effects/CardWith3DEffects";
import DraggableCard3D from "@/features/entertainment-card/components/draggable-card-3d/DraggableCard3D";

const EntertainmentCardContainer = () => {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 p-8">
			<div className="text-center">
				<h1 className="mb-8 font-bold text-2xl text-white">
					アニメカード - ぬん
				</h1>

				<div className="perspective-1000 flex items-center justify-center">
					<DraggableCard3D
						width="230px"
						height="287.5px"
						dragSpeed={0.4}
						releaseStiffness={20}
						containerPadding={50}
						rotationLimit={60}
					>
						<CardWith3DEffects
							imageSrc="/images/content-cards/entertainment-card/special_effect_card_nun.gif"
							imageAlt="アニメカード - ゴゴン"
							width={460}
							height={575}
						/>
					</DraggableCard3D>
				</div>

				<p className="mt-8 text-sm text-white opacity-80">
					カードをドラッグして3D回転させてみてください
				</p>
			</div>
		</div>
	);
};

export default EntertainmentCardContainer;
