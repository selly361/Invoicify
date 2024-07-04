import { League_Spartan } from 'next/font/google'
import './globals.css'
import { PropsWithChildren } from 'react'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang='en' className='dark'>
			<body
				className={`${leagueSpartan.className} bg-bgMain min-h-screen flex justify-center pt-16`}
			>
					{children}
			</body>
		</html>
	)
}