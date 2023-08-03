import React from 'react'

const AddTask = () => {
  return (
    <form className='Add-Task'>
        <label>
            <input type="text" name="name" placeholder="Add your tasks here... "/>
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
}

export default AddTask