import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class GroupsService {
  async getGroup(groupId) {
    const res = await api.get('api/groups/' + groupId)
    logger.log('get group', res.data)
    AppState.activeGroup = res.data
  }
  async createGroup(groupData) {
    const res = await api.post('api/groups', groupData)
    logger.log('group created', res.data)
    AppState.groups.push(res.data)
    return res.data
  }
  async groupSearch(data) {

    const res = await api.get('api/groups', { params: data })
    logger.log('[groupSearch]', res.data)
    AppState.searchResults = res.data
  }
}
export const groupsService = new GroupsService()