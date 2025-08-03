import type { Recipe } from './recipes'

export type FavouriteStore = {
  favourites: Recipe[]
  addFav: (recipe: Recipe) => void
  removeFav: (idMeal: string) => void
}
