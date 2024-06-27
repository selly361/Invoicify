import { League_Spartan } from 'next/font/google'
import '../globals.css'
import { PropsWithChildren } from 'react'
import { HandleModals, Header, Overlay, SessionProvider } from '@/Components'
import { FormProvider, ModalContextProvider } from '@/Contexts'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<SessionProvider>
			<ModalContextProvider>
				<FormProvider>
					<html lang='en' className='dark'>
						<body
							className={`${leagueSpartan.className} bg-bgMain min-h-screen flex justify-center pt-16`}
						>
							<Header />
							<Overlay />
							<HandleModals />
							<main className='w-[730px] min-h-24 bg-bgMain flex flex-col gap-16'>{children}</main>
						</body>
					</html>
				</FormProvider>
			</ModalContextProvider>
		</SessionProvider>
	)
}
