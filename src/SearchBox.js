import React from 'react'

export const SearchBox = ({ searchChange}) => {
  return (
    <div className='text-center m-2'>
        <input 
        className='border-2 text-white border-cyan-900 mb-10 mt-10 p-2 px-5 rounded-full w-80 bg-transparent' 
        type="text" placeholder='find your robots' 
        onChange={searchChange}/>
    </div>
  )
}
