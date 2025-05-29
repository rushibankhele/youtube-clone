import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ['All', 'Music', 'Gaming', 'News', 'JavaScript', 'Interview', 'Data Stucture', 'Food', 'T-series' ]
  return (
    <div className='m-2 p-2 flex'>
      {list.map(btnName => <Button key={btnName} name={btnName}/>)}
    </div>
  )
}

export default ButtonList