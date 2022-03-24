import { Auth0Provider } from "@bcwdev/auth0provider";
import { membersService } from "../services/MembersService";
import BaseController from "../utils/BaseController";

export class MembersController extends BaseController {
  constructor() {
    super('api/members')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async create(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const member = await membersService.createMember(req.body)
      res.send(member)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      const memberId = req.params.id
      const userId = req.userInfo.id
      const member = await membersService.removeMember(userId, memberId)
      res.send(member)
    } catch (error) {
      next(error)
    }
  }
}