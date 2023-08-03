import './styles/App.css';
import { useState } from 'react'
import AddTask from './components/AddTask/AddTask';
import TasksList from './components/TasksList/TasksList';



function App() {
  const [tasksArr,setTasks] = useState([])

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log('addTasks func called, passing func as prop')
    console.log(tasksArr)
    e.target.reset() //clears field after submission
  }
  
  const onChange = (e) => {
    setTasks(e.target.value)
    // console.log(e.target.value) 
  }

  console.log(tasksArr)
  return (
    <div className="App">
      <h1>30 Days of React: Day7-Task List App</h1>
      <AddTask onChange={onChange} onSubmit={onSubmit}/>
      <TasksList/>
    </div>
  );
}

export default App;
