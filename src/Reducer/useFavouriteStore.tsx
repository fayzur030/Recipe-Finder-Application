import { create } from 'zustand'
import type { FavouriteStore } from '../Types/favourite'
import { persist } from 'zustand/middleware'

export const useFavouriteStore = create<FavouriteStore>()(
  persist(
    (set, get) => ({
      favourites: [],
      addFav: (recipe) => {
        if (!get().favourites.find((r) => r.idMeal === recipe.idMeal)) {
          set({ favourites: [...get().favourites, recipe] })
        }
      },
      removeFav: (idMeal) => {
        set({ favourites: get().favourites.filter((r) => r.idMeal !== idMeal) })
      },
    }),
    {
      name: 'favourite-storage',
    }
  )
)
