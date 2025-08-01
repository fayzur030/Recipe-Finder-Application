import React from 'react'
import type { SearchProps } from '../Types/search'

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  const [inputValue, setInputValue] = React.useState(searchTerm)
  const handleClick = () => {
    setSearchTerm(inputValue)
  }
  return (
    <div className='w-full px-4 md:px-0 md:w-/2 lg:w-10/12 mx-auto relative'>
      <input
        type='text'
        placeholder='Search here...'
        className='w-full pl-4 pr-4 py-2 rounded-full bg-white text-black placeholder-gray-400 dark:placeholder-gray-500 
          border border-gray-300 dark:border-gray-400 
          focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 shadow-sm'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className='absolute top-1/2 -translate-y-1/2 right-2 px-4 sm:py-2  py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 text-sm'
        onClick={handleClick}
      >
        search
      </button>
    </div>
  )
}

export default Search
