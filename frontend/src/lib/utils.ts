import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// TODO: utilsディレクトリへ移動

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const debugColor = () => {
	if (process.env.NODE_ENV === "production") return "";
	return "bg-orange-500/30";
};
