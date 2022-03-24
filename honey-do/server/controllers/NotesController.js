import { Auth0Provider } from "@bcwdev/auth0provider";
import { notesService } from "../services/NotesService";
import BaseController from "../utils/BaseController";

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const note = await notesService.create(req.body)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await notesService.delete(req.userInfo.id, req.params.id)
      return res.send('Note deleted!')
    } catch (error) {
      next(error)
    }
  }
}