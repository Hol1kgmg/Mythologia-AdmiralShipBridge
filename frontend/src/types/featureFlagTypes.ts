export type FeatureFlags = {
	openingSoonDialog: boolean;
	newFeature: boolean;
	experimentalFeature: boolean;
};

export type FeatureFlagKey = keyof FeatureFlags;

export type FeatureFlagError = {
	code: "FEATURE_FLAG_READ_ERROR";
	message: string;
	originalError: unknown;
};
