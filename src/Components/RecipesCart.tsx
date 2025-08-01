import { Link } from 'react-router-dom'
import type { Recipe } from '../Types/recipes'

type props = {
  item: Recipe
}

const RecipesCart = ({ item }: props) => {
  return (
    <div className='border hover:scale-[1.02] duration-300 p-4 rounded-lg shadow-md dark:text-black w-full  md:w-auto'>
      <img
        src={item.strMealThumb}
        alt={item.strMealThumb}
        className='w-full h-48 object-cover'
      />
      <div className='p-2'>
        <h2 className='text-xl font-semibold mb-2'>{item.strMeal}</h2>
        <div>
          <Link to={`/recipe/${item.idMeal}`}>
            <button className='mt-4 btn btn-success'>View Recipe</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecipesCart
