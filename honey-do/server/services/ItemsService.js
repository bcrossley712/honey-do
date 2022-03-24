import { dbContext } from "../db/dbContext"
import { Forbidden } from "../utils/Errors"
class ItemsService {

  async create(body) {
    const item = await dbContext.Items.create(body)
    await item.populate('creator', 'name id picture')
    return item
  }

  async delete(userId, itemId) {
    const item = await dbContext.Items.findById(itemId)
    if (item.creatorId.toString() != userId) {
      throw new Forbidden
    }
    const removeItem = await dbContext.Items.findByIdAndDelete(itemId)
    return removeItem
  }

}
export const itemsService = new ItemsService();