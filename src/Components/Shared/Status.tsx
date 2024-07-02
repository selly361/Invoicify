import { Status as TStatus } from '@/Types'

interface Prop {
    status: TStatus
}

const statusClasses = {
	'paid': {
		bg: 'bg-statusPaidBg',
		dot: 'bg-statusPaid',
		text: 'text-statusPaid'
	},
	'pending': {
		bg: 'bg-statusPendingBg',
		dot: 'bg-statusPending',
		text: 'text-statusPending'
	},
	'draft': {
		bg: 'bg-statusDraftBg',
		dot: 'bg-statusDraft',
		text: 'text-statusDraft'
	}
}

function Status({ status }: Prop) {
	const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1)

	const classes = statusClasses[status]

	return (
		<div
			className={`w-[104px] h-[40px] transition-colors duration-500 ease-in-out rounded-md ${classes.bg} flex items-center justify-center gap-2`}
		>
			<span className={`w-2 h-2 rounded-full ${classes.dot}`} />
			<h3 className={`text-heading-s-variant ${classes.text}`}>
				{capitalizedStatus}
			</h3>
		</div>
	)
}

export default Status
