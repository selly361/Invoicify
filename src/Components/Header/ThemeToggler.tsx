'use client'

import { IconMoon, IconSun } from '@/Icons'
import { useEffect, useState } from 'react'

function ThemeToggler() {
	const [theme, setTheme] = useState<string>('')

	useEffect(() => {
		localStorage.setItem('theme', theme)
		document.documentElement.setAttribute('class', theme)
	}, [theme])

	useEffect(() => {
		const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

		setTheme(localStorage.getItem('theme') || preferedColorScheme)
	}, [])

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