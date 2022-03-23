import BaseController from "../utils/BaseController";

export class ChoresController extends BaseController {
  constructor() {
    super('api/chores')
    this.router
      .get('', this.getChores)
      .post('', this.createChore)
  }

  getChores(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  createChore(req, res, next) {
    try {
      req.body.id = req.userInfo.id
    } catch (error) {
      next(error)
    }
  }
}