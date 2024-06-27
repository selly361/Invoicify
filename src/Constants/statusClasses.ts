interface StatusClasses {
	bg: string
	dot: string
	text: string
}

export const statusClasses: Record<string, StatusClasses> = {
	Paid: {
		bg: 'bg-statusPaidBg',
		dot: 'bg-statusPaid',
		text: 'text-statusPaid'
	},
	Pending: {
		bg: 'bg-statusPendingBg',
		dot: 'bg-statusPending',
		text: 'text-statusPending'
	},
	Draft: {
		bg: 'bg-statusDraftBg',
		dot: 'bg-statusDraft',
		text: 'text-statusDraft'
	}
}