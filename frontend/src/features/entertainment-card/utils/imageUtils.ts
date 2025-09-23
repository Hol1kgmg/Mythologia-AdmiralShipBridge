export const getImageSrc = (url: URL): string => {
	switch (url.protocol) {
		case "file:":
			return url.pathname;
		case "https:":
		case "http:":
			return url.href;
		default:
			return url.href;
	}
};
