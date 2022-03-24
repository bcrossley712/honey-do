import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const NoteSchema = new Schema({
  body: { type: String, required: true },
  groupId: { type: ObjectId, required: true, ref: 'Group' },
  creatorId: { type: ObjectId, required: true, ref: 'Account' }

}, { timestamps: true, toJSON: { virtuals: true } }
)

NoteSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})