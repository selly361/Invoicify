import { IconLogo } from '@/Icons'
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import UserProfile from './UserProfile'


function Header() {

	return (
		<>
			<header className='fixed left-0 top-0 bottom-0 h-screen w-24 bg-bgHeader rounded-r-3xl z-50'>
				<Link href='/'>
					<div className='relative grid place-items-center w-24 h-24 rounded-r-3xl bg-purple group'>
						<div className='absolute left-0 bottom-0 w-full h-1/2 bg-purpleLight rounded-br-3xl rounded-tl-3xl'></div>
						<IconLogo className='relative z-10' />
					</div>
				</Link>

				<div className='absolute bottom-8 w-24 flex flex-col gap-8 items-center'>
					<ThemeToggler />

					<div className='w-full h-[1px] bg-purpleLight opacity-50' />

					<UserProfile />
				</div>
			</header>
		</>
	)
}

export default Header
