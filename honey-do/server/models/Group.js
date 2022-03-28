import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const GroupSchema = new Schema(
  {
    name: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

GroupSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})

export class Group {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.picture = data.creator.picture
    this.creatorName = data.creator.name
    this.creatorEmail = data.creator.email
    this.name = data.name
    this.createdAt = data.createdAt
  }
}