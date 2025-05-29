import React from 'react'

const Button = ({name}) => {
  return (
    <div>   
      <button className='py-2 px-4 mx-2 bg-gray-300 rounded-xl'>{name}</button>
    </div>
  )
}

export default Button