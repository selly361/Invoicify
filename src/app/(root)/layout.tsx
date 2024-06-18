import { League_Spartan } from 'next/font/google'
import '../globals.css'
import { PropsWithChildren } from 'react'
import { SessionProvider } from '@/Components'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<SessionProvider>
			<html lang='en'>
				<body className={leagueSpartan.className}>{children}</body>
			</html>
		</SessionProvider>
	)
}