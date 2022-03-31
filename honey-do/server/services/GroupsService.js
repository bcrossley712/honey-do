import { dbContext } from "../db/DbContext"
import { Group } from "../models/Group"
import { BadRequest, Forbidden } from "../utils/Errors"
import { logger } from "../utils/Logger"
import { membersService } from "./MembersService"

class GroupsService {
  async getAll(query = {}) {
    logger.log('get all groups query', query)
    const regSearch = new RegExp(query.search, 'ig')
    const groups = await dbContext.Groups.find(
      { name: { $regex: regSearch } }
    ).populate('creator')
    return groups.map(g => new Group(g))
  }
  async getById(id) {
    const group = await dbContext.Groups.findById(id).populate('creator', 'name picture')
    if (!group) {
      throw new BadRequest('Invalid Group Id')
    }
    return group
  }
  async getAccountGroups(id) {
    const groups = await dbContext.Groups.find({ creatorId: id })
    return groups
  }
  async create(body) {
    const newGroup = await dbContext.Groups.create(body)
    await newGroup.populate('creator', 'name picture')
    await membersService.createMember({ groupId: newGroup.id, accountId: newGroup.creatorId, status: 'accepted' })
    return newGroup
  }
  async edit(body) {
    const original = await dbContext.Groups.findById(body.id)
    if (original.creatorId.toString() !== body.creatorId) {
      throw new Forbidden('Only the creator can edit the group')
    }
    original.name = body.name ? body.name : original.name
    await original.save()
    return original
  }
  async remove(groupId, userId) {
    const original = await this.getById(groupId)
    const member = await dbContext.Members.find({ groupId: groupId })
    if (original.creatorId.toString() !== userId) {
      throw new Forbidden('You cannot delete this Group')
    }
    await member.forEach(m => membersService.removeMember(userId, m.id))
    await dbContext.Groups.findOneAndRemove({ _id: groupId })
  }

}
export const groupsService = new GroupsService()