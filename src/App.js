import './styles/App.css';
import AddTask from './components/AddTask/AddTask';
import TasksList from './components/TasksList/TasksList';

function App() {
  return (
    <div className="App">
      <h1>30 Days of React: Day7-Task List App</h1>
      <AddTask/>
      <TasksList/>
    </div>
  );
}

export default App;
