import LightRays from "./LightRays";

export const LightRaysScreen = () => {
	return (
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
	);
};

export default LightRaysScreen;
