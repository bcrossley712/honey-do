import mongoose from 'mongoose'
import { RecipeSchema } from "../../client/app/Models/Recipe";
import { AccountSchema, ProfileSchema } from '../models/Account'
import { ListSchema } from "../models/List";
import { PlannerSchema } from "../models/Planner";
import { ValueSchema } from '../models/Value';


class DbContext {
  Lists = mongoose.model('List', ListSchema);
  Planners = mongoose.model('Planner', PlannerSchema);
  Recipes = mongoose.model('Recipe', RecipeSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
