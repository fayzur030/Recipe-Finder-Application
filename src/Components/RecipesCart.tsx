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
  // console.log(item)

  const toggleFav = () => {
    if (isFav) {
      removeFav(item.idMeal)
    } else {
      addFav(item)
    }
  }

  return (
    <div className='border bg-[#F8F8F6] hover:scale-[1.02] duration-300 p-4 relative rounded-lg shadow-md dark:text-black w-full  md:w-auto'>
      <img
        src={item.strMealThumb}
        alt={item.strMealThumb}
        className='w-full h-48 object-cover'
      />
      <div className='p-2'>
        <h2 className='text-xl font-semibold mb-2'>{item.strMeal}</h2>
        <p className='font-thin'>Category: {item.strCategory}</p>
        <p className='font-thin'>Area: {item.strArea}</p>

        <div>
          <Link to={`/recipe/${item.idMeal}`}>
            <button className='mt-4 w-full btn bg-orange-600 hover:bg-[#5D9C6B] rounded-full text-yellow-50 font-normal'>
              View Recipe Details
            </button>
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
