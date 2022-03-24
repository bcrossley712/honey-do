import { dbContext } from "../db/DbContext"

class NotesService {
  async getGroupNotes(id) {
    const notes = await dbContext.Notes.find({ groupId: id })
    return notes
  }
  async create(body) {
    const note = dbContext.Notes.create(body)
    return note
  }
  async delete(userId, noteId) {

  }

}
export const notesService = new NotesService()