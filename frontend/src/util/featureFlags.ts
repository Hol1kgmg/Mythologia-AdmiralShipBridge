import { Result } from "@praha/byethrow";
import productionFlags from "@/config/featureFlags.json";
import localFlags from "@/config/featureFlags.local.json";
import type {
	FeatureFlagError,
	FeatureFlagKey,
	FeatureFlags,
} from "@/types/featureFlagTypes";

// featureFlagsを読み込む処理
const getFeatureFlagsFunction = Result.try({
	try: (): FeatureFlags => {
		if (process.env.NODE_ENV === "development") {
			return localFlags as FeatureFlags;
		}
		return productionFlags as FeatureFlags;
	},
	catch: (error): FeatureFlagError => ({
		code: "FEATURE_FLAG_READ_ERROR",
		message: "Failed to read feature flags configuration",
		originalError: error,
	}),
});

export const isFeatureEnabled = (
	flagKey: FeatureFlagKey,
	defaultValue = false,
): boolean => {
	const result = getFeatureFlagsFunction();

	if (Result.isSuccess(result)) {
		const flags = result.value;
		return flags[flagKey] ?? defaultValue;
	}

	const error = result.error;
	console.warn(
		`Feature flag ${flagKey} could not be read:`,
		error.message,
		error.originalError,
	);
	return defaultValue;
};

export const getFeatureFlag = (flagKey: FeatureFlagKey): boolean => {
	return isFeatureEnabled(flagKey);
};

export const getAllFeatureFlags = () => getFeatureFlagsFunction();
