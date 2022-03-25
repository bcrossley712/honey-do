import { logger } from "../utils/Logger"
import { api, tastyApi } from "./AxiosService"

const baseQuery = {
  from: '0',
  size: '20',
  q: ''
}
class RecipesService {

  async getRecipes(query) {
    baseQuery.q = query
    const res = await tastyApi.get('', { params: baseQuery })
    logger.log(res.data.results)
  }

}
export const recipesService = new RecipesService()