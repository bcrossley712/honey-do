import mongoose from 'mongoose'

import { AccountSchema, ProfileSchema } from '../models/Account'
import { ItemSchema } from "../models/Item";
import { GroupSchema } from "../models/Group";
import { ValueSchema } from '../models/Value';
import { ChoreSchema } from "../models/Chore";
import { NoteSchema } from "../models/Note";
import { MemberSchema } from "../models/Member";


class DbContext {
  Members = mongoose.model('Member', MemberSchema);
  Notes = mongoose.model('Note', NoteSchema);
  Items = mongoose.model('Item', ItemSchema);
  Groups = mongoose.model('Group', GroupSchema);
  // Recipes = mongoose.model('Recipe', RecipeSchema);
  Chores = mongoose.model('Chore', ChoreSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
