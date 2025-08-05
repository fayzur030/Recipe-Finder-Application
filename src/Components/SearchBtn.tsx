import React from 'react'
import type { SearchProps } from '../Types/search'
import { Search as SearchIcon } from 'lucide-react'

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  const [inputValue, setInputValue] = React.useState(searchTerm)

  const handleClick = () => {
    setSearchTerm(inputValue)
  }

  return (
    <div className='w-full px-4 md:px-0 mx-auto max-w-[100%] sm:max-w-[500px] lg:max-w-[700px] '>
      <div className='relative w-full '>
        <button
          className='absolute top-1/2 -translate-y-1/2 left-3 p-1 text-gray-600 dark:text-gray-800 '
          onClick={handleClick}
        >
          <SearchIcon size={20} />
        </button>

        <input
          type='text'
          placeholder='Search here...'
          className='w-full pl-11 pr-4 py-2 rounded-full bg-white text-black  placeholder-gray-400 dark:placeholder-gray-500 
          border border-gray-300 dark:border-gray-400 
          focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 shadow-sm'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleClick()
          }}
        />
      </div>
    </div>
  )
}

export default Search
