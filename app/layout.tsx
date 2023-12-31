import type { Metadata } from "next";
import "./globals.css";
import { OnestFont } from "@/utils/fonts";
import StoreProvider from "@/components/Layout/StoreProvider";
import AppWrapper from "@/components/Layout/AppWrapper";

export const metadata: Metadata = {
	title: "Ivgamix | Task Manager",
	description: "The best solution for task management.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<StoreProvider>
			<html lang="en">
				<body className={OnestFont.className}>
					<AppWrapper>
						{children}
					</AppWrapper>
				</body>
			</html>
		</StoreProvider>
	);
}
