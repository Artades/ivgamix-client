"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import store, { AppStore } from "@/store";
import { QueryClient, QueryClientProvider } from "react-query";

export default function StoreProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		// Create the store instance the first time this renders
		storeRef.current = store;
	}

const queryClient = new QueryClient();

	return (
		<Provider store={storeRef.current}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Provider>
	);
}
