import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const ChoreSchema = new Schema({
  body: { type: String, required: true },
  isComplete: { type: Boolean, default: false },
  groupId: { type: ObjectId, required: true, ref: 'Group' },
  assignedTo: { type: ObjectId, ref: 'Account' },
  creatorId: { type: ObjectId, required: true, ref: 'Account' }

}, { timestamps: true, toJSON: { virtuals: true } }
)

ChoreSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

ChoreSchema.virtual('choreOwner', {
  localField: 'assignedTo',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
