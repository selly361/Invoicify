import { IconSpinner } from '@/Icons'
import React from 'react'

function loading() {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<IconSpinner />
		</div>
	)
}


export default loading