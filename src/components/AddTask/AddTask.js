import React from 'react'

const AddTask = () => {
  return (
    <form className='Add-Task'>
        <label>
            Add Tasks: 
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
}

export default AddTask