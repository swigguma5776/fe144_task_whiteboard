import React, {useState} from 'react'

function TaskList({tasks, addTasks, deleteTasks}) {
    const [task, setTask] = useState("");
    
    
    const handleChange = (event) => {
        event.preventDefault();
        setTask(event.target.value);
    }
  return (
    <div>
        <input type='text' name='title' onChange={handleChange} placeholder='Enter Task'></input>
        <button type='submit' onClick={() => addTasks(task)}>Add Task</button>
        { tasks && (
        <ul>
            {tasks.map((task)=> (
                <li key={task.id} >
                    {task.title}
                    <button onClick={() => deleteTasks(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
        )}
      
    </div>
  )
}

export default TaskList
