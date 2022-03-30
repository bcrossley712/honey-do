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

  async deleteNotes(noteId) {
    const res = await api.delete('api/notes/' + noteId)
    logger.log(res.data)
    AppState.notes = AppState.notes.filter(n => n.id != noteId)
  }

  async deleteAllNotes(array) {
    await array.forEach(n => this.deleteNotes(n.id))
  }
}
export const notesService = new NotesService()