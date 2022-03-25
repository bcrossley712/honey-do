import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

class MembersService {
  async getGroupsByAccount(id) {
    const myGroups = await dbContext.Members.find({ accountId: id }).populate('group')
    return myGroups
  }
  async getGroupMembers(id) {
    const members = await dbContext.Members.find({ groupId: id }).populate('account')
    return members
  }
  async createMember(body) {
    const member = await dbContext.Members.create(body)
    return member
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