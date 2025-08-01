import type React from 'react'
import type { FilterDropDownProps } from '../Types/filterDropDown'

const FilterDropDown: React.FC<FilterDropDownProps> = ({
  label,
  options,
  selectedOption,
  onchangeHandler,
}) => {
  return (
    <div className='w-full px-4 md:px-0 md:w-1/2 lg:w-10/12 mx-auto '>
      <label className='text-sm block mb-1 '>{label}</label>
      <div className='rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300'>
        <select
          value={selectedOption}
          onChange={(e) => onchangeHandler(e.target.value)}
          className='p-2 border rounded-full  focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300   dark:border-gray-400 w-full'
        >
          <option value='' className=''>
            All
          </option>
          {options.map((opt: string) => (
            <option value={opt} key={String(opt)}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterDropDown
