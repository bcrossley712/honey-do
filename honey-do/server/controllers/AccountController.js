import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { groupsService } from "../services/GroupsService"
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/groups', this.getAccountGroups)
  }
  async getAccountGroups(req, res, next) {
    try {
      const groups = await groupsService.getAccountGroups(req.query)
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
}
