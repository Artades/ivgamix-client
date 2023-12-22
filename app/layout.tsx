"use client"
import type { Metadata } from 'next'
import './globals.css'
import { OnestFont } from '@/utils/fonts'
import { Provider } from 'react-redux'
import store from '@/store'


// export const metadata: Metadata = {
//   title: 'Ivgamix | Task Manager',
//   description: 'The best solution for task magament.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<Provider store={store}>
			<html lang="en">
				<body className={OnestFont.className}>
					{/* <Header /> */}
					<div className="container">{children}</div>
					{/* <Footer /> */}
				</body>
			</html>
		 </Provider>
	);
}
