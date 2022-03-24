import { dbContext } from "../db/DbContext"

class MembersService {
  async getGroupMembers(id) {
    const members = await dbContext.Members.find({ groupId: id })
    return members
  }

}

export const membersService = new MembersService()