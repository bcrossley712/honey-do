import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const RecipeSchema = new Schema({
  groupId: { type: ObjectId, required: true, ref: 'Group' },
  name: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  ingredients: { type: String, required: true },
  description: { type: String, required: true },
  stub: { type: String, required: true },
  upVote: { type: String, required: true }
})

RecipeSchema.virtual('group', {
  localField: 'groupId',
  foreignField: '_id',
  ref: 'Planner',
  justOne: true
})