'use client'
import { selectAuthState } from '@/store/slices/authSlice';
import Head from 'next/head';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function Home() {
	const router = useRouter();
	const authState = useSelector(selectAuthState);
  useEffect(() => {
		if (authState && authState === "not authinticated") {
			router.push("/auth");
		}
    console.log(authState)
	}, [authState]);
  return (
		<>
		
			{/* <div className="w-[500px] h-[500px]"></div>
			<div className="w-[500px] h-[500px]"></div>
			<div className="w-[500px] h-[500px]"></div> */}
		</>
	);
}
