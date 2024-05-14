import { useState } from 'react'; 
import './App.css';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  const addTasks = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title
    }
    
    const newTasks = [...tasks, newTask]
    setTasks(newTasks)
  }
  
  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id != id ))
  }

  return (
   <div>
    <h1>Task Manager</h1>
    <TaskList tasks={tasks} addTasks={addTasks} deleteTasks={deleteTasks} />
   </div>
  )
}

export default App
