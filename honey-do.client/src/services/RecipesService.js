import { AppState } from "../AppState"
import { Recipe } from "../Models/Recipe"
import { logger } from "../utils/Logger"
import { api, tastyApi } from "./AxiosService"

const baseQuery = {
  from: '0',
  size: '20',
  q: 'chicken'
}
class RecipesService {

  async getRecipes(query) {
    // baseQuery.q = query
    const res = await tastyApi.get('', { params: baseQuery })
    logger.log(res.data.results)
    AppState.recipes = res.data.results.map(r => new Recipe(r))
  }

}
export const recipesService = new RecipesService()