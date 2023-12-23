

import type { Metadata } from 'next'
import './globals.css'
import { OnestFont } from '@/utils/fonts'
import { usePathname } from 'next/navigation'
import Wrapper from '@/components/Layout/Wrapper/Wrapper'
import StoreProvider from '@/components/Layout/StoreProvider'
import Header from '@/components/Layout/Header/Header'
import AppWrapper from '@/components/Layout/AppWrapper'



export const metadata: Metadata = {
  title: 'Ivgamix | Task Manager',
  description: 'The best solution for task magament.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

	

	

  return (
		<>
		
			<StoreProvider>
				<html lang="en">
					<body className={OnestFont.className}>
						<AppWrapper children={children} />
						{/* <Footer /> */}
					</body>
				</html>
			</StoreProvider>
		</>
	);
}
