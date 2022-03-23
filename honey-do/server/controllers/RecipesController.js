import { Auth0Provider } from "@bcwdev/auth0provider"
import BaseController from '../utils/BaseController'

export class ReceipesController extends BaseController {
  constructor() {
    super('api/recipes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllRecipes)
      .get('/:recipeId', this.getRecipeById)
      .post('', this.createRecipe)
      .put('/:recipeId', this.updateRecipe)
      .delete('/:recipeId', this.deleteRecipe)
  }
  deleteRecipe(req, res, next) {
    try {
      throw new Error("Method not implemented.")
    } catch (error) {
      next(error)
    }
  }
  updateRecipe(req, res, next) {
    try {
      throw new Error("Method not implemented.")
    } catch (error) {
      next(error)
    }
  }
  createRecipe(req, res, next) {
    try {
      throw new Error("Method not implemented.")
    } catch (error) {
      next(error)
    }
  }
  getRecipeById(req, res, next) {
    try {
      throw new Error("Method not implemented.")
    } catch (error) {
      next(error)
    }
  }
  getAllRecipes(req, res, next) {
    try {
      throw new Error("Method not implemented.")
    } catch (error) {
      next(error)
    }
  }
}