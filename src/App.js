import './styles/App.css';
import { useState } from 'react'
import AddTask from './components/AddTask/AddTask';
import TasksList from './components/TasksList/TasksList';

const onSubmit = (e) =>{
  e.preventDefault();
  console.log('addTasks func called')
}

function App() {
  const [tasksArr,setTasks] = useState([])
  console.log(tasksArr)
  return (
    <div className="App">
      <h1>30 Days of React: Day7-Task List App</h1>
      {/* <AddTask/> */}
      <form className='Add-Task'  onSubmit={onSubmit}>
        <label>
            <input type="text" name="name" placeholder="Add your tasks here... "/>
        </label>
        <input type="submit" value="Submit" />
        {/* <button onClick={()=>{addTasks()}}>Submit</button> */}
    </form>
      <TasksList/>
    </div>
  );
}

export default App;
