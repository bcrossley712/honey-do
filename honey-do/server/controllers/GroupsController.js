import { Auth0Provider } from "@bcwdev/auth0provider";
import { groupsService } from "../services/GroupsService";
import { itemsService } from "../services/ItemsService";
import { choresService } from "../services/ChoresService";
import { notesService } from "../services/NotesService";
import { membersService } from "../services/MembersService";
import BaseController from "../utils/BaseController";

export class GroupsController extends BaseController {
  constructor() {
    super('api/groups')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/items', this.getGroupItems)
      .get('/:id/chores', this.getGroupChores)
      .get('/:id/notes', this.getGroupNotes)
      .get('/:id/members', this.getGroupMembers)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.remove)

  }
  async getAll(req, res, next) {
    try {
      const groups = await groupsService.getAll(req.query)
      return res.send(groups)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      const group = await groupsService.getById(req.params.id)
      return res.send(group)
    } catch (error) {
      next(error)
    }
  }
  async getGroupMembers(req, res, next) {
    try {
      const members = await membersService.getGroupMembers(req.params.id)
      return res.send(members)
    } catch (error) {
      next(error)
    }
  }
  async getGroupItems(req, res, next) {
    try {
      const items = await itemsService.getGroupItems(req.params.id)
      return res.send(items)
    } catch (error) {
      next(error)
    }
  }
  async getGroupChores(req, res, next) {
    try {
      const chores = await choresService.getGroupChores(req.params.id)
      return res.send(chores)
    } catch (error) {
      next(error)
    }
  }
  async getGroupNotes(req, res, next) {
    try {
      const notes = await notesService.getGroupNotes(req.params.id)
      return res.send(notes)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const group = await groupsService.create(req.body)
      return res.send(group)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const updated = await groupsService.edit(req.body)
      res.send(updated)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      await groupsService.remove(req.params.id, req.userInfo.id)
      return res.send('Group removed')
    } catch (error) {
      next(error)
    }
  }
}