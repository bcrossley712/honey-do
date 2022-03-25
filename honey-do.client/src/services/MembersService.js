import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class MembersService {
  async getGroupMembers(id) {
    const res = await api.get(`api/groups/${id}/members`)
    logger.log('got group members', res.data)
    AppState.members = res.data
  }
}
export const membersService = new MembersService()