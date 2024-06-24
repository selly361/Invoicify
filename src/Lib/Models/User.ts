import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
	userId: {
		type: String,
		required: true
	},
	invoices: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Invoice'
		}
	]
})

const User = models.User || model('User', userSchema)

export default User