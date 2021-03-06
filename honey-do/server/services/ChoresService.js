import { dbContext } from "../db/DbContext";
import { socketProvider } from "../SocketProvider";
import { Forbidden } from "../utils/Errors";
import { logger } from "../utils/Logger";

class ChoresService {
  async getGroupChores(id) {
    const chores = await dbContext.Chores.find({ groupId: id }).populate('choreOwner', 'name picture')
    return chores
  }
  async create(body) {
    const chore = await dbContext.Chores.create(body)
    await chore.populate('choreOwner', 'name picture')
    socketProvider.messageRoom('group-' + body.groupId, 'new:chore', chore)
    return chore
  }
  async edit(updateBody) {
    const original = await dbContext.Chores.findById(updateBody.id)
    // NOTE do we need creatorId check here??
    // if (original.creatorId.toString() !== updateBody.creatorId) {
    //   throw new Forbidden('You cannot edit this')
    // }
    original.isComplete = updateBody.isComplete !== '' ? updateBody.isComplete : original.isComplete
    await original.save()
    socketProvider.messageRoom('group-' + updateBody.groupId, 'edit:chore', original)
    return original
  }
  async delete(userId, choreId) {
    const choreToDelete = await dbContext.Chores.findById(choreId)
    const group = await dbContext.Groups.findById(choreToDelete.groupId)
    if (choreToDelete.creatorId.toString() == userId || group.creatorId.toString() == userId) {
      socketProvider.messageRoom('group-' + group.id, 'delete:chore', choreToDelete)
      await dbContext.Chores.findByIdAndDelete(choreId)
    } else {
      throw new Forbidden('You cannot delete this')
    }
  }

}

export const choresService = new ChoresService();