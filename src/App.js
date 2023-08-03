import './styles/App.css';
import { useState } from 'react'
import AddTask from './components/AddTask/AddTask';
import TasksList from './components/TasksList/TasksList';

const initialTaskArr = ['']

function App() {
  const [tasksArr,setTasks] = useState(initialTaskArr)
  const onSubmit = (e) =>{
    e.preventDefault();
    console.log('addTasks func called, passing func as prop')
    console.log(tasksArr)
    console.log(`size is ${tasksArr.length}`)
    e.target.reset() //clears field after submission
  }
  
  const addTask = (e) => {
    setTasks([...tasksArr, e.target.value])
    console.log(`size is ${tasksArr.length}`)

    // console.log(e.target.value) 
  }

  console.log(tasksArr)
  return (
    <div className="App">
      <h1>30 Days of React: Day7-Task List App</h1>
      <AddTask addTask={addTask} onSubmit={onSubmit}/>
      <TasksList/>
    </div>
  );
}

export default App;
