export const isNullOrUndefined = <T>(
	data: T | null | undefined,
): data is null | undefined => {
	return data === null || data === undefined;
};

export const isUndefined = <T>(
	data: T | null | undefined,
): data is undefined => {
	return data === undefined;
};
