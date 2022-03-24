import { dbContext } from "../db/DbContext";

class ItemsService {
  async getGroupItems(id) {
    const items = await dbContext.Items.find({ groupId: id })
    return items
  }

}
export const itemsService = new ItemsService();