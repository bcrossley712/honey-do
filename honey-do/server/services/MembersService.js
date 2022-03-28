import { dbContext } from "../db/DbContext"
import { AccountGroups, GroupMember } from "../models/Member"
import { Forbidden } from "../utils/Errors"

class MembersService {
  async getGroupsByAccount(id) {
    const myGroups = await dbContext.Members.find({ accountId: id, status: 'accepted' }).populate('group')
    return myGroups.map(g => new AccountGroups(g))
  }
  async getGroupMembers(query = {}) {
    const members = await dbContext.Members.find(query).populate('account')
    return members.map(m => new GroupMember(m))
  }
  async createMember(body) {
    const member = await dbContext.Members.create(body)
    return member
  }
  async editMember(memberId, userId, update) {
    const original = await dbContext.Members.findById(memberId)
    const group = await dbContext.Groups.findById(original.groupId)
    if (group.creatorId.toString() !== userId) {
      throw new Forbidden('You are not allowed to do this')
    }
    original.status = update.status ? update.status : original.status
    await original.save()
    return original
  }
  async removeMember(userId, memberId) {
    const foundMember = await dbContext.Members.findById(memberId)
    const foundGroup = await dbContext.Groups.findById(foundMember.groupId)
    if (foundGroup.creatorId.toString() === userId || foundMember.accountId.toString() === userId) {
      await dbContext.Members.findByIdAndDelete(memberId)
      return "Member Delorted"
    } else {
      throw new Forbidden('You are not authorized to remove this member')
    }
  }
}

export const membersService = new MembersService()