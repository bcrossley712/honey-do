export class Recipe {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.servings = data.yields
    this.slug = data.slug
    this.imageUrl = data.thumbnail_url
    this.ingredients = data.sections[0].components.map(c => c.ingredient.name)

  }
}