import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Recipe } from '../Types/recipes'

const RecipeDetails = () => {
  const { idMeal } = useParams()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      )
      const data = await response.json()
      setRecipe(data.meals?.[0] ?? null)
      console.log(data)
    }
    fetchRecipes()
  }, [idMeal])
  if (!idMeal || !recipe)
    return <p className='text-center text-gray-500 mt-10'>Loading...</p>
  return (
    <div className='max-w-4xl mx-auto p-4 mt-8 '>
      <div className='text-accent (#F29C50) (#333333) bg-cream (#FFF9F1) rounded-lg shadow-md border border-[#E2E8F0] p-6'>
        <h1 className='text-2xl font-bold text-center mb-4 text-black'>
          {recipe?.strMeal}
        </h1>
        <img
          src={recipe?.strMealThumb}
          alt={recipe?.strMeal}
          className='w-full rounded-lg mb-4'
        />
        <div className='mb-2'>
          <span className='font-semibold text-black'>Category: </span>
          <span className='text-black'>{recipe?.strCategory}</span>
        </div>
        <div className='mb-2'>
          <span className='font-semibold text-black'>Area: </span>
          <span className='text-black'>{recipe?.strArea}</span>
        </div>
        <div className='mb-2'>
          <span className='font-semibold text-black'>Instructions: </span>
          <span className='text-black'>{recipe?.strInstructions}</span>
        </div>
        <div className='mb-2'>
          <span className='font-semibold text-black'>Watch Tutorial: </span>
          <span className='text-black'>{recipe?.strYoutube}</span>
        </div>
        {recipe?.strYoutube && (
          <div className='mt-6'>
            <h2 className='text-xl font-semibold text-olive mb-2'>
              Watch Tutorial:
            </h2>
            <div className='aspect-w-16 aspect-h-9'>
              <iframe
                className='w-full rounded-lg shadow h-96'
                src={`https://www.youtube.com/embed/${new URL(
                  recipe.strYoutube
                ).searchParams.get('v')}`}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecipeDetails
