// useAuthentication.ts
'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkAuth } from "@/utils/checkAuth";

const useAuthentication = () => {
	const router = useRouter();

	useEffect(() => {
		const checkAuthentication = async () => {
			try {
				const authStatus = await checkAuth();
				console.log("Authentication result:", authStatus);

				if ("redirect" in authStatus) {
					router.push("/auth");
				} else if ("props" in authStatus) {
					router.push("/");
				}
			} catch (error) {
				console.error("Authentication error:", error);
				router.push("/auth");
			}
		};

		checkAuthentication();
	}, [router]);

	 // You can customize the return value as needed
};

export default useAuthentication;
