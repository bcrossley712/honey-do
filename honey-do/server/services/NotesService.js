import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

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
    const note = await dbContext.Notes.findById(noteId)
    const noteGroup = await dbContext.Groups.findById(note.groupId)
    if (note.creatorId.toString() !== userId && noteGroup.creatorId.toString() !== userId) {
      throw new Forbidden('Can not delete this item')
    }
    const removeNote = await dbContext.Notes.findByIdAndDelete(noteId)
    return removeNote
  }

}
export const notesService = new NotesService()