import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class NotesService {
  async getNotes(groupId) {
    const res = await api.get(`api/groups/${groupId}/notes`)
    logger.log('[getNotes]', res.data)
    AppState.notes = res.data.reverse()
  }
  async createNote(body) {
    const res = await api.post('api/notes', body)
    logger.log('[createNote]', res.data)
    AppState.notes.unshift(res.data)
  }
}
export const notesService = new NotesService()