import { Link } from 'react-router-dom'
import type { Recipe } from '../Types/recipes'
import { useFavouriteStore } from '../Reducer/useFavouriteStore'
import { Heart, HeartOff } from 'lucide-react'

type props = {
  item: Recipe
}

const RecipesCart = ({ item }: props) => {
  const favourites = useFavouriteStore((state) => state.favourites)
  const addFav = useFavouriteStore((state) => state.addFav)
  const removeFav = useFavouriteStore((state) => state.removeFav)
  const isFav = favourites.some((fav) => fav.idMeal === item.idMeal)

  const toggleFav = () => {
    if (isFav) {
      removeFav(item.idMeal)
    } else {
      addFav(item)
    }
  }

  return (
    <div className='border hover:scale-[1.02] duration-300 p-4 relative rounded-lg shadow-md dark:text-black w-full  md:w-auto'>
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
        <button
          onClick={toggleFav}
          title={isFav ? 'Remove from Favourites' : 'Add to Favourites'}
          className='absolute top-5 right-5 text-red-500'
        >
          {isFav ? (
            <HeartOff className='text-red-500' />
          ) : (
            <Heart className='text-gray-500' />
          )}
        </button>
      </div>
    </div>
  )
}

export default RecipesCart
