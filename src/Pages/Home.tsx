import React, { useState } from 'react'
import RecipesCart from '../Components/RecipesCart'
import Search from '../Components/SearchBtn'
import FilterDropDown from '../Components/FilterDropDown'
import { useQuery } from '@tanstack/react-query'
import {
  getAreas,
  getCategories,
  getRecipe,
  getRecipesByArea,
  getRecipesByCategory,
} from '../api/filter'

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedArea, setSelectedArea] = useState<string>('')

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

  return (
    <div className='bg-white max-w-6xl mx-auto rounded-lg shadow p-4 flex-1 text-black'>
      <div className='flex flex-col md:flex-row md:items-end md:space-x-6 mb-6 '>
        <div className='flex-1 mb-4 md:mb-0'>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className='flex-1 '>
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
        <div className='flex-1 '>
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
      {isLoading ? (
        <div className='flex justify-center mt-10'>
          <span className='loading loading-spinner loading-lg text-primary'></span>
        </div>
      ) : recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto'>
          {recipes.map((recipe) => (
            <RecipesCart key={recipe.idMeal} item={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
