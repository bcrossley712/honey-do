import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const ItemSchema = new Schema(
  {
    name: { type: String, required: true },
    groupId: { type: ObjectId, required: true, ref: 'Group' },
    type: { type: String, enum: ['grocery', 'hardware', 'office', 'cleaning'], default: 'grocery' },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Profile' },
    isComplete: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
ItemSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})