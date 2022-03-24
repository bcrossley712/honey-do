import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { itemsService } from "../services/ItemsService"
export class ItemsController extends BaseController {
  constructor() {
    super('api/items')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }


  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const item = await itemsService.create(req.body)
      res.send(item)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const item = await itemsService.update(req.body)
      res.send(item)
    } catch (error) {
      next(error)
    }

  }

  async delete(req, res, next) {
    try {
      const userId = req.userInfo.id
      const itemId = req.params.id
      const item = await itemsService.delete(userId, itemId)
      res.send(item)
    } catch (error) {
      next(error)
    }
  }
}