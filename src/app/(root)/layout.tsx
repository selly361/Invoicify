import { League_Spartan } from 'next/font/google'
import '../globals.css'
import { PropsWithChildren } from 'react'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang='en' className='theme-auto'>
			<body className={leagueSpartan.className}>{children}</body>
		</html>
	)
}
