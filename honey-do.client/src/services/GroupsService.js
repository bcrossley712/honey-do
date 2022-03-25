import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class GroupsService {
  async createGroup(groupData) {
    const res = await api.post('api/groups', groupData)
    logger.log('group created', res.data)
    AppState.groups.push(res.data)
    return res.data
  }
}
export const groupsService = new GroupsService()