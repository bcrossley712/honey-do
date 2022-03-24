import { dbContext } from "../db/DbContext";

class ChoresService {
  async getGroupChores(id) {
    const chores = await dbContext.Chores.find({ groupId: id })
    return chores
  }

}

export const choresService = new ChoresService();