import { dbContext } from "../db/DbContext"

class NotesService {
  async create(body) {
    const note = dbContext.Notes.create(body)
    return note
  }
  async delete(userId, noteId) {

  }

}
export const notesService = new NotesService()