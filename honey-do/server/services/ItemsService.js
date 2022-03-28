import { dbContext } from "../db/dbContext"
import { Forbidden } from "../utils/Errors"
class ItemsService {
  async getGroupItems(id) {
    const items = await dbContext.Items.find({ groupId: id })
    return items
  }


  async create(body) {
    const item = await dbContext.Items.create(body)
    await item.populate('creator', 'name id picture')
    return item
  }

  async update(update, userId) {
    const item = await dbContext.Items.findById(update.id)
    // FIXME!
    // const member = await dbContext.Members.findById(userId)
    // const group = await dbContext.Groups.findById(update.groupId)
    // if (member.groupId.toString() !== group.id.toString()) {
    //   throw new Forbidden('Can not edit this item')
    // }
    item.isComplete = update.isComplete !== null ? update.isComplete : item.isComplete
    await item.save()
    return item
  }

  async delete(userId, itemId) {
    const itemToDelete = await dbContext.Items.findById(itemId)
    if (itemToDelete.creatorId.toString() != userId) {
      throw new Forbidden('Can not delete this item')
    }
    const removeItem = await dbContext.Items.findByIdAndDelete(itemId)
    return removeItem
  }

}
export const itemsService = new ItemsService();