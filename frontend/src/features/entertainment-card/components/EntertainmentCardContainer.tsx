import LightRays from "@/components/shared/light-rays/LightRays";
import { getEntertainmentCardPath } from "@/lib/constants";
import CardWith3DEffects from "./card-with-3d-effects/CardWith3DEffects";
import DraggableCard3D from "./draggable-card-3d/DraggableCard3D";

const EntertainmentCardContainer = () => {
	return (
		<>
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					// zIndex: -1
				}}
			>
				<LightRays
					raysOrigin="top-center"
					raysColor="#ffffff"
					raysSpeed={1.0}
					lightSpread={2.0}
					rayLength={2.0}
					// pulsating={true}
					fadeDistance={2}
					saturation={1}
					followMouse={false}
					mouseInfluence={1.0}
					noiseAmount={0}
					distortion={0}
				/>
			</div>
			<div className="relative z-10 flex min-h-screen items-center justify-center">
				<div className="relative z-10 text-center">
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
								imageSrc={getEntertainmentCardPath("nun.gif")}
								imageAlt="moving card"
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
			{/*<div className="relative flex min-h-screen items-center justify-center overflow-hidden">

		</div>*/}
		</>
	);
};

export default EntertainmentCardContainer;
