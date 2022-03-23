import { Auth0Provider } from "@bcwdev/auth0provider";
import { listsService } from "../services/ListsService";
import BaseController from "../utils/BaseController";

export class ListsController extends BaseController {
  constructor() {
    super('api/lists')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
  }
  getAll(req, res, next) {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      next(error)
    }
  }
  getById(req, res, next) {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const list = await listsService.create(req.body)
    } catch (error) {
      next(error)
    }
  }
}