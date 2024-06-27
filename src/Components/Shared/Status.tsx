import { statusClasses } from '@/Constants'
import { Status as TStatus } from '@/Types'

interface Prop {
    status: TStatus
}

function Status({ status }: Prop) {
	const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1)

	const classes = statusClasses[capitalizedStatus]

	return (
		<div
			className={`w-[104px] h-[40px] rounded-md ${classes.bg} flex items-center justify-center gap-2`}
		>
			<span className={`w-2 h-2 rounded-full ${classes.dot}`} />
			<h3 className={`text-heading-s-variant ${classes.text}`}>
				{capitalizedStatus}
			</h3>
		</div>
	)
}

export default Status
