import { dbContext } from "../db/DbContext"

class ListsService {
  async create(body) {
    const list = await dbContext.Lists.create(body)
    await list.populate('creator', 'name picture')
    return list
  }

}
export const listsService = new ListsService()