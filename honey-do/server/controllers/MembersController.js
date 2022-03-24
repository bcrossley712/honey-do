import { membersService } from "../services/MembersService";
import BaseController from "../utils/BaseController";

export class MembersController extends BaseController {
  constructor() {
    super('api/members')
    this.router
      .post('', this.create)
      .delete('', this.remove)
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
      const memberId = req.params.memberId
      const userId = req.userInfo.id
      const member = await membersService.removeMember(userId, memberId)
    } catch (error) {
      next(error)
    }
  }
}