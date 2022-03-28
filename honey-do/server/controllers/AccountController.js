import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { membersService } from "../services/MembersService"
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/groups', this.getGroupsByAccount)
      .put('', this.edit)
  }
  async getGroupsByAccount(req, res, next) {
    try {
      const groups = await membersService.getGroupsByAccount(req.userInfo.id)
      return res.send(groups)
    } catch (error) {
      next(error)
    }
  }
  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      const update = await accountService.updateAccount(req.userInfo, req.body)
      return res.send(update)
    } catch (error) {
      next(error)
    }
  }
}
