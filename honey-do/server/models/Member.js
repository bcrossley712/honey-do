import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const MemberSchema = new Schema({
  groupId: { type: ObjectId, required: true, ref: 'Group' },
  accountId: { type: ObjectId, required: true, ref: 'Account' },
  status: { type: String, enum: ['pending', 'declined', 'accepted'], required: true }
},
  { timestamps: true, toJSON: { virtuals: true } })

MemberSchema.index({ groupId: 1, accountId: 1 }, { unique: true })

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

export class GroupMember {
  constructor(data) {
    this.id = data.accountId
    this.name = data.account.name
    this.status = data.status
    this.picture = data.account.picture
    this.email = data.account.email
    this.memberId = data.id
    this.groupId = data.groupId
  }
}
export class AccountGroups {
  constructor(data) {
    this.id = data.groupId
    this.name = data.group.name
    this.creatorId = data.group.creatorId
    this.memberId = data.id
    this.accountId = data.accountId
    this.status = data.status
  }
}