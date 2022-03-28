import { Auth0Provider } from "@bcwdev/auth0provider";
import { membersService } from "../services/MembersService";
import BaseController from "../utils/BaseController";

export class MembersController extends BaseController {
  constructor() {
    super('api/members')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.remove)
  }

  async create(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      req.body.status = 'pending'
      const member = await membersService.createMember(req.body)
      res.send(member)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      const update = await membersService.editMember(req.params.id, req.userInfo.id, req.body)
      return res.send(update)
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