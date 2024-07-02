import { MotionProps, Variants } from 'framer-motion'

export const formAnimation = {
	hidden: {
		x: '-100vw'
	},
	visible: {
		x: 0,
		transition: { type: 'spring', duration: 1, bounce: 0.05 }
	},
	exit: {
		x: '-100vw',
		transition: { duration: 1 }
	}
} satisfies Variants

export const deleteModalAnimation = {
	hidden: {
		scale: 0.3
	},

	visible: {
		scale: 1
	},

	exit: {
		scale: 0,
		transition: {
			duration: 0.2
		}
	}
} satisfies Variants

export const LoginModalAnimation = {
	hidden: {
		y: '100vw'
	},
	visible: {
		y: 0,
		transition: { type: 'spring', duration: .5, bounce: 0.05 }
	},
	exit: {
		y: '100vw',
		transition: { duration: .5 }
	}
} satisfies Variants

export const dropdownAnimation = {
	hidden: {
		scale: 0,
		boxShadow: 'none',
		transition: {
			delay: 0.15
		}
	},
	visible: {
		scale: 1,
		transition: {
			type: 'spring',
			duration: 0.4,
			delayChildren: 0.2,
			staggerChildren: 0.05
		}
	},
	exit: {
		height: 0,
		visibility: 'hidden',
		boxShadow: 'none',
		transition: {
			delay: 0.15
		}
	}
} satisfies Variants

export const dropdownOptionAnimation = {
	variants: {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1
		},
		exit: {
			opacity: 0,
		}
	},
	transition: { opacity: { duration: 0.2 } }
} satisfies MotionProps
