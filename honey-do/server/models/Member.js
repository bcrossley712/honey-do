import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const MemberSchema = new Schema({
  groupId: { type: ObjectId, required: true, ref: 'Group' },
  accountId: { type: ObjectId, required: true, ref: 'Account' }
},
  { timestamps: true, toJSON: { virtuals: true } })

MemberSchema.virtual('account', {
  localField: 'accountId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

MemberSchema.virtual('group', {
  localField: 'groupId',
  foreignField: '_id',
  ref: 'Group',
  justOne: true
})