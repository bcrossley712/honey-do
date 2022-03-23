import mongoose, { Mongoose } from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const RecipeSchema = new Schema({
  plannerId: { type: ObjectId, required: true, ref: 'Planner' },
  name: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  ingredients: { type: String, required: true },
  description: { type: String, required: true },
  stub: { type: String, required: true },
  upVote: { type: String, required: true }
})