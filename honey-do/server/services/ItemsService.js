import { dbContext } from "../db/DbContext"
import { socketProvider } from "../SocketProvider"
import { Forbidden } from "../utils/Errors"
class ItemsService {
  async getGroupItems(id) {
    const items = await dbContext.Items.find({ groupId: id })
    return items
  }


  async create(newItem) {
    const item = await dbContext.Items.create(newItem)
    await item.populate('creator', 'name id picture')
    socketProvider.messageRoom('group-' + newItem.groupId, 'new:item', item)
    return item
  }

  async update(update, userId) {
    const item = await dbContext.Items.findById(update.id)
    // const member = await dbContext.Members.find({ accountId: userId })
    const group = await dbContext.Groups.findById(update.groupId)
    if (item.groupId.toString() !== group.id.toString()) {
      throw new Forbidden('Can not edit this item')
    }
    item.isComplete = update.isComplete !== null ? update.isComplete : item.isComplete
    await item.save()
    socketProvider.messageRoom('group-' + update.groupId, 'edit:item', item)
    return item
  }

  async delete(userId, itemId) {
    const itemToDelete = await dbContext.Items.findById(itemId)
    const itemGroup = await dbContext.Groups.findById(itemToDelete.groupId)
    if (itemToDelete.creatorId.toString() !== userId && itemGroup.creatorId.toString() !== userId) {
      throw new Forbidden('Can not delete this item')
    }
    const removeItem = await dbContext.Items.findByIdAndDelete(itemId)
    return removeItem

  }



}
export const itemsService = new ItemsService();