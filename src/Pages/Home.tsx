import React, { useState } from 'react'
import RecipesCart from '../Components/RecipesCart'
import Search from '../Components/SearchBtn'
import FilterDropDown from '../Components/FilterDropDown'
import { useQuery } from '@tanstack/react-query'
import {
  getAreas,
  getCategories,
  getRandomRecipe,
  getRecipe,
  getRecipesByArea,
  getRecipesByCategory,
} from '../api/filter'
import type { Recipe } from '../Types/recipes'
import RandomRecipeModal from '../Components/RandomRecipeModal'
import HeroPage from './HeroPage'

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedArea, setSelectedArea] = useState<string>('')
  const [randomRecipe, setRandomRecipe] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
  const { data: Areas = [] } = useQuery({
    queryKey: ['areas'],
    queryFn: getAreas,
  })
  const { data: recipes = [], isLoading } = useQuery({
    queryKey: ['recipes', searchTerm, selectedCategory, selectedArea],
    queryFn: async () => {
      if (searchTerm) return getRecipe(searchTerm)
      if (selectedCategory) return getRecipesByCategory(selectedCategory)
      if (selectedArea) return getRecipesByArea(selectedArea)
      return getRecipe('chicken') // Default search term
    },
  })

  const handleRandomClick = async () => {
    const result = await getRandomRecipe()
    setRandomRecipe(result)
    setIsModalOpen(true)
  }
  const onClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='bg-[#F6F1RD] max-w-6xl mx-auto rounded-lg shadow p-4 flex-1 text-black'>
      <RandomRecipeModal
        isModalOpen={isModalOpen}
        onClose={onClose}
        recipe={randomRecipe}
      />
      <div className='flex flex-col md:flex-row md:items-end md:space-x-6 mb-6 '>
        <div className='flex-1 mb-4 md:mb-0'>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className='flex-1 font-medium '>
          <FilterDropDown
            label='Filter by Category'
            options={categories}
            selectedOption={selectedCategory}
            onchangeHandler={(val) => {
              setSelectedCategory(val)
              setSearchTerm('')
              setSelectedArea('')
            }}
          />
        </div>
        <div className='flex-1 font-medium'>
          <FilterDropDown
            label='Filter by Area'
            options={Areas}
            selectedOption={selectedArea}
            onchangeHandler={(val) => {
              setSelectedArea(val)
              setSearchTerm('')
              setSelectedCategory('')
            }}
          />
        </div>
      </div>
      <button
        className='bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg font-semibold mb-6'
        onClick={handleRandomClick}
      >
        Surprise!
      </button>
      <div className='mb-5'>
        <HeroPage />
      </div>
      {isLoading ? (
        <div className='flex justify-center mt-10'>
          <span className='loading loading-spinner loading-lg text-primary'></span>
        </div>
      ) : recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto'>
          {recipes.map((recipe: Recipe) => (
            <RecipesCart key={recipe.idMeal} item={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
