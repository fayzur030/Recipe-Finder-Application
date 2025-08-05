import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import type { Recipe } from '../Types/recipes'

type Props = {
  isModalOpen: boolean
  onClose: () => void
  recipe: Recipe | null
}

const RandomRecipeModal = ({ isModalOpen, onClose, recipe }: Props) => {
  if (!recipe) return null

  return (
    <Dialog
      open={isModalOpen}
      as='div'
      className='fixed inset-0 z-50 overflow-hidden'
      onClose={onClose}
    >
      <div className='fixed inset-0 bg-black/70 backdrop-blur-sm' />

      <div className='fixed inset-0 flex items-center justify-center'>
        <DialogPanel className='w-[500px] h-[500px] rounded-xl bg-[#fff7ed] p-6 shadow-2xl text-black overflow-hidden'>
          <DialogTitle className='text-2xl font-bold text-center mb-4 text-black'>
            {recipe.strMeal}
          </DialogTitle>

          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className='w-full h-40 object-cover rounded-lg mb-4'
          />

          <div className='mb-2'>
            <span className='font-semibold text-black'>Category: </span>
            <span className='text-black'>{recipe.strCategory}</span>
          </div>

          <div className='mb-2'>
            <span className='font-semibold text-black'>Area: </span>
            <span className='text-black'>{recipe.strArea}</span>
          </div>

          <p className='text-sm line-clamp-5 text-black'>
            {recipe.strInstructions}
          </p>

          <div className='mt-6 text-right'>
            <Button
              onClick={onClose}
              className='bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md'
            >
              Close
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default RandomRecipeModal
