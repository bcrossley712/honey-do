import { dbContext } from "../db/DbContext"

class NotesService {
  async getGroupNotes(id) {
    const notes = await dbContext.Notes.find({ groupId: id }).populate('creator')
    return notes
  }
  async create(body) {
    const note = await dbContext.Notes.create(body)
    await note.populate('creator')
    return note
  }
  async delete(userId, noteId) {

  }

}
export const notesService = new NotesService()