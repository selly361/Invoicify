'use client'

import Link from "next/link"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useModalContext } from "@/Contexts"


function UserProfile() {

    const { data } = useSession()
	const { openModal } = useModalContext()

	return (
		<button onClick={() => openModal('login')}>
			<Image
				src={data?.user?.image ?? '/image-placeholder.jpg'}
				alt='image placeholder'
				height={40}
				width={40}
				className='rounded-full'
			/>
		</button>
	)
}

export default UserProfile
