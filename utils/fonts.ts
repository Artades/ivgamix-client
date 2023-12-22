import localFont from "next/font/local";
import { Cousine, Inter } from "next/font/google";

export const CousineFont = Cousine({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mono",
});

export const InterFont = Inter({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500", "600", "700"],
	variable: "--font",
});

export const OnestFont = localFont({
	variable: "--font",
	src: [
		{
			path: "../fonts/Onest-Regular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/Onest-Medium.woff",
			weight: "500",
			style: "normal",
		},
		{
			path: "../fonts/Onest-Bold.woff",
			weight: "600",
			style: "normal",
		},
		{
			path: "../fonts/Onest-ExtraBold.woff",
			weight: "700",
			style: "normal",
		},
	],
});
