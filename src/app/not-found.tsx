import { IconIllustration } from '@/Icons'
import Link from 'next/link'

function NotFound() {
	return (
		<div className='flex flex-col gap-2 w-screen min-h-screen bg-bgMain items-center pt-24'>
			<IconIllustration />
			<h2 className='text-textPrimary text-heading-m'>Page Not Found</h2>
			<Link className='button-primary mt-4' href='/'>
				Go back Home
			</Link>
		</div>
	)
}

export default NotFound
