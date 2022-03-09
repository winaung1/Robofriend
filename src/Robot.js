import React from 'react'

export const Robots = ({name, email, id}) => {
  return (
    <div className='text-white p-2 hover:animate-bounce w-64 m-2 shadow-2xl hover:cursor-pointer'>
       <img src={`https://robohash.org/${id}?200x200`}alt="robots" /> 
      <div className='text-center'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}
