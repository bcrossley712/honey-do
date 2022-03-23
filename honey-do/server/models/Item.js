import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const ItemSchema = new Schema(
  {
    name: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Profile' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
ItemSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})