import { dbContext } from "../db/DbContext"

class MembersService {
  async getGroupsByAccount(id) {
    const myGroups = await dbContext.Members.find({ accountId: id }).populate('group')
    return myGroups
  }
  async getGroupMembers(id) {
    const members = await dbContext.Members.find({ groupId: id }).populate('account')
    return members
  }

  async createMember() {

  }
  async removeMember() {

  }
}

export const membersService = new MembersService()