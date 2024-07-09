import React from 'react'

function SearchInput() {
  return (
   <form className='flex items-center gap-2'>
      <input type="text" placeholder='Search..' className='input input-bordered rounded-full' />
      <button type='submit' className='btn bg-sky-300 text-white'>
      Search
      </button>
   </form>
  )
}

export default SearchInput