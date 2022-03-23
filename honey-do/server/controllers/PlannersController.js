import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class PlannersController extends BaseController {
  constructor() {
    super('api/planners')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.remove)

  }
  async getById(req, res, next) {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      next(error)
    }
  }
}