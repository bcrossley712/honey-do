import { AppState } from "../AppState"
import { Recipe } from "../Models/Recipe"
import { logger } from "../utils/Logger"
import { api, tastyApi } from "./AxiosService"

const baseQuery = {
  from: '0',
  size: '80',
  q: ''
}
class RecipesService {

  async getRecipes(query) {
    logger.log(query)
    baseQuery.q = query
    const res = await tastyApi.get('', { params: baseQuery })
    let baseRecipes = res.data.results.filter(r => r.compilations)
    logger.log('[getRecipes]', baseRecipes)
    AppState.recipes = baseRecipes.map(r => new Recipe(r))
  }

}
export const recipesService = new RecipesService()