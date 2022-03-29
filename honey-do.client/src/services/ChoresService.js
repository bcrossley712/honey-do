import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ChoresService {
  async createChore(body) {
    const res = await api.post('api/chores', body)
    logger.log('chore created', res.data)
    AppState.chores.push(res.data)
  }
  async getChores(groupId) {
    const res = await api.get(`api/groups/${groupId}/chores`)
    logger.log('got chores', res.data)
    AppState.chores = res.data
  }
  async markComplete(choreId) {
    let choreToComplete = AppState.chores.find(c => c.id == choreId)
    choreToComplete.isComplete = !choreToComplete.isComplete
    const res = await api.put(`api/chores/${choreId}`, choreToComplete)
    logger.log('chore marked complete', res.data)
    let index = AppState.chores.findIndex(c => c.id == choreId)
    AppState.chores.splice(index, 1, res.data)
  }
}

export const choresService = new ChoresService()