import React from 'react'
import { SearchIcon } from '../../icons/Icon'

const Search = () => {
  return (
    <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <input type="text" placeholder="Search Twitter" className="placeholder-gray-dark bg-transparent focus:outline-none text-sm" />
    </div>
  )
}

export default Search