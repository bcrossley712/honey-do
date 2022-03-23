import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class ItemsController extends BaseController {
  constructor() {
    super('api/items')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createItems)
      .delete('/:id', this.deleteItems)
  }

  createItems(req, res, next) {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      next(error)
    }
  }

  deleteItems(req, res, next) {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      next(error)
    }
  }
}