import mongoose from 'mongoose'
import { RecipeSchema } from "../../client/app/Models/Recipe";
import { AccountSchema, ProfileSchema } from '../models/Account'
import { ItemSchema } from "../models/Item";
import { GroupSchema } from "../models/Group";
import { ValueSchema } from '../models/Value';
import { ChoreSchema } from "../models/Chore";


class DbContext {
  Items = mongoose.model('Item', ItemSchema);
  Groups = mongoose.model('Planner', GroupSchema);
  Recipes = mongoose.model('Recipe', RecipeSchema);

  Chores = mongoose.model('Chore', ChoreSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
