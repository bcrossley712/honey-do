import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

class MembersService {
  async getGroupMembers(id) {
    const members = await dbContext.Members.find({ groupId: id })
    return members
  }

  async createMember() {

  }
  async removeMember(userId, memberId) {
    const foundMember = await dbContext.Members.findById({ id: memberId })
    const foundGroup = await dbContext.Groups.findById({ groupId: foundMember.groupId })
    if (foundGroup.creatorId !== userId || foundMember.accountId !== userId) {
      throw new Forbidden('You are not authorized to remove this member')
    }
    await dbContext.Members.findByIdAndDelete(memberId)
  }
}

export const membersService = new MembersService()