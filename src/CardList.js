import React from 'react'
import { Robots } from './Robot'
import { robots } from './robots'

export const CardList = ({robots}) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {
      robots.map((user, i) =>{
            return ( 
            <Robots 
              key={i} 
              name={robots[i].name} 
              email={robots[i].email}  
              id={robots[i].id} 
            />
            )
          })
        }
      </div>
    
  )
}
