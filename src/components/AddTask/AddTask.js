import React from 'react'

const AddTask = ({ onSubmit, onChange }) => {
  return (
    <form className='Add-Task' onSubmit={onSubmit}>
        <label>
            <input type="text" name="name" placeholder="Add your tasks here... " onChange={onChange}/>
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
}

export default AddTask