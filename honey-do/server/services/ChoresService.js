import { dbContext } from "../db/DbContext";
import { Forbidden } from "../utils/Errors";

class ChoresService {
  async create(body) {
    const chore = await dbContext.Chores.create(body)
    return chore
  }
  async edit(updateBody) {
    const original = await dbContext.Chores.findById(updateBody.id)
    if (original.creatorId.toString() !== updateBody.creatorId) {
      throw new Forbidden('You cannot edit this')
    }
    original.isComplete = updateBody.isComplete !== '' ? updateBody.isComplete : original.isComplete
    await original.save()
    return original
  }
  async delete(userId, choreId) {
    const choreToDelete = await dbContext.Chores.findById(choreId)
    if (choreToDelete.creatorId.toString() !== userId) {
      throw new Forbidden('You cannot delete this')
    }
    await dbContext.Chores.findByIdAndDelete(choreId)
  }

}

export const choresService = new ChoresService();