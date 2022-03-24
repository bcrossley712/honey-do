import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"

class GroupsService {
  async getById(id) {
    const group = await dbContext.Groups.findById(id).populate('creator', 'name picture')
    if (!group) {
      throw new BadRequest('Invalid Group Id')
    }
    return group
  }
  async create(body) {
    const group = await dbContext.Groups.create(body)
    await group.populate('creator', 'name picture')
    return group
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
  async remove(id, userId) {
    const original = await dbContext.Groups.find
  }

}
export const groupsService = new GroupsService()