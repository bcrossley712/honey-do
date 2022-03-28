import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class MembersService {
  async getGroupMembers(id) {
    const res = await api.get(`api/groups/${id}/members`, { params: { status: 'accepted' } })
    logger.log('got group members', res.data)
    AppState.members = res.data
  }
  async getPendingMembers(id) {
    const res = await api.get(`api/groups/${id}/members`, { params: { status: 'pending' } })
    logger.log('[getPendingMembers]', res.data)
    AppState.groupRequests = res.data
  }
  async createMember(data) {
    const res = await api.post('api/members', data)
    logger.log('[createMember]', res.data)
    AppState.members.push(res.data)
  }
  async acceptMember(memberId, body) {
    const res = await api.put('api/members/' + memberId, body)
    logger.log('[acceptMember]', res.data)
    AppState.members.push(res.data)
    AppState.memberRequest = {}
    // FIXME filter group request
    AppState.groupRequests.filter(r => r.memberId != memberId)
  }
  async declineMember(memberId, body) {
    const res = await api.put('api/members/' + memberId, body)
    logger.log('[declineMember]', res.data)
    AppState.memberRequest = {}
  }
}
export const membersService = new MembersService()