'use client'

import Link from "next/link"
import Image from "next/image"
import { useSession } from "next-auth/react"


function UserProfile() {

    const { data } = useSession()

	return (
		<Link href={`/api/auth/sign${data?.user ? 'out' : 'in'}`}>
			<Image
				src={data?.user?.image ?? '/image-placeholder.jpg'}
				alt='image placeholder'
				height={40}
				width={40}
				className='rounded-full'
			/>
		</Link>
	)
}

export default UserProfile
