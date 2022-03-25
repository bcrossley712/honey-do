import { AppState } from "../AppState"
import { Recipe } from "../Models/Recipe"
import { logger } from "../utils/Logger"
import { api, tastyApi } from "./AxiosService"

const baseQuery = {
  from: '0',
  size: '80',
  q: 'chicken'
}
class RecipesService {

  async getRecipes(query) {
    // baseQuery.q = query
    const res = await tastyApi.get('', { params: baseQuery })
    // logger.log(res.data.results.filter(r => r.compilations))
    logger.log('res.data', res.data.results)
    let baseRecipes = res.data.results.filter(r => r.compilations)
    AppState.recipes = baseRecipes.map(r => new Recipe(r))
  }

}
export const recipesService = new RecipesService()