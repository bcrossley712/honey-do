import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const ChoreSchema = new Schema({
  body: { type: String, required: true },
  groupId: { type: String, required: true },
  assignedTo: { type: ObjectId, required: true, ref: 'Account' },

}, { timestamps: true, toJSON: { virtuals: true } }
)

ChoreSchema.virtual('assignedTo', {
  localField: 'assignedTo',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
