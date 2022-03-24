import { Auth0Provider } from "@bcwdev/auth0provider";
import { choresService } from "../services/ChoresService";
import BaseController from "../utils/BaseController";

export class ChoresController extends BaseController {
  constructor() {
    super('api/chores')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const chore = await choresService.create(req.body)
      return res.send(chore)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const update = await choresService.edit(req.body)
      return res.send(update)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await choresService.delete(req.userInfo.id, req.params.id)
      return res.send('Chore deleted!')
    } catch (error) {
      next(error)
    }
  }
}