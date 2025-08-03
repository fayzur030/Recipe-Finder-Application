import RecipesCart from '../Components/RecipesCart'
import { useFavouriteStore } from '../Reducer/useFavouriteStore'

const FavouritePage = () => {
  const favourites = useFavouriteStore((state) => state.favourites)
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold p-6 text-center'>Favourite Recipe</h1>
      {favourites.length === 0 ? (
        <p className='text-center'>No favourite recipe added yet</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {favourites.map((recipe) => (
            <RecipesCart key={recipe.idMeal} item={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}

export default FavouritePage
