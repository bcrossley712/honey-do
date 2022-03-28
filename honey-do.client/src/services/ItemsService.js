import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class ItemsService {
  async createItem(body) {
    const res = await api.post('api/items', body)
    logger.log('[createItems]', res.data)
    AppState.items.unshift(res.data)

  }

  async getItems(groupId) {
    const res = await api.get('api/groups/' + groupId + '/items')
    logger.log('[getItems]', res.data)
    AppState.items = res.data
  }

  async markComplete(itemId) {
    let itemToComplete = AppState.items.find(i => i.id == itemId)
    itemToComplete.isComplete = !itemToComplete.isComplete
    const res = await api.put('api/items/' + itemId, itemToComplete)
    logger.log('item marked complete', itemToComplete.isComplete)
  }

}

export const itemsService = new ItemsService();