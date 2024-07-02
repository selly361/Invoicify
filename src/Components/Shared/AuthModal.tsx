'use client'

import { motion } from 'framer-motion'
import { LoginModalAnimation } from '@/Constants'
import { IconGitHub, IconGoogle } from '@/Icons'
import { signIn, signOut, useSession } from 'next-auth/react'

function LoginModal() {
	const { data } = useSession()

	return (
		<motion.div
			variants={LoginModalAnimation}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='bg-bgModal w-max h-max p-12 flex flex-col gap-4 rounded-lg fixed inset-0 m-auto z-50 items-center text-center'
		>
			{data?.user ? (
				<>
					<h2 className='text-heading-m text-textPrimary'>Sign Out</h2>
					<p className='text-heading-s text-textSecondary'>Are you sure you want to sign out?</p>
					<button className='button-auth' onClick={() => signOut()}>
						Sign Out
					</button>
				</>
			) : (
				<>
					{' '}
					<button className='button-auth' onClick={() => signIn('google')}>
						<IconGoogle />
						<h3 className='text-heading-s text-textPrimary'>
							Sign In with Google
						</h3>
					</button>
					<button className='button-auth' onClick={() => signIn('github')}>
						<IconGitHub />
						<h3 className='text-heading-s text-textPrimary'>
							Sign In with GitHub
						</h3>
					</button>
				</>
			)}
		</motion.div>
	)
}

export default LoginModal
