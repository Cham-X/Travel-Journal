import React from 'react'
import AddImg from "../Images/icons8-add-64.png"

const AddIcon = () => {
  return (
    <div className='add-icon'>
      <a href='/new-journal'><img src={AddImg} alt='img'/></a> 
    </div>
  )
}

export default AddIcon
