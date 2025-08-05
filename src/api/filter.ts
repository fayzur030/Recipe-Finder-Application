import type { Area, Category } from '../Types/apiCategory'

export const getCategories = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
  )
  const data = await response.json()
  return data.meals.map((mdata: Category) => mdata.strCategory)
}
export const getAreas = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
  )
  const data = await response.json()
  return data.meals.map((mdata: Area) => mdata.strArea)
}
//For All Category

export const getRecipesByCategory = async (category: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  )
  const data = await response.json()
  return data.meals || []
}

//For All Area
export const getRecipesByArea = async (area: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  )
  const data = await response.json()
  return data.meals || []
}

export const getRecipe = async (search: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch recipes')
  }
  const data = await response.json()
  return data.meals || []
}

export const getRandomRecipe = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  )
  const data = await response.json()
  return data.meals[0]
}
