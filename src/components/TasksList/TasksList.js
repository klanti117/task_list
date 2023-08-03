import React from 'react'
import Task from '../Task/Task'

const TasksList = () => {
  return (
    <div className='Tasks-list'>
    <h3>List of Tasks</h3>
    <ul>
      <Task/>
    </ul>
    </div>
  )
}

export default TasksList