import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  recipes: [],
  activeRecipe: {},
  activeGroup: {},
  items: [],
  chores: [],
  notes: [],
  members: [],
  groups: [],
  activeGroup: {},
  searchResults: [],
  grouptoJoin: {},
  groupRequests: [],
  memberRequest: {}
})
