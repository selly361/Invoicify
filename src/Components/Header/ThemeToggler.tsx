'use client'

import { IconMoon, IconSun } from '@/Icons'
import { useEffect, useState } from 'react'

function ThemeToggler() {
	const preferedColorScheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

	const [theme, setTheme] = useState(localStorage.getItem('theme') || preferedColorScheme)

	useEffect(() => {
		localStorage.setItem('theme', theme)
		document.documentElement.setAttribute('class', theme)
	}, [theme])

	return (
		<button
			aria-label='theme toggler'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? <IconSun /> : <IconMoon />}
		</button>
	)
}

export default ThemeToggler