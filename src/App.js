import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { addTask,deleteTask,toggleTask } from './actions/taskAction';

function App() {
  const [input,setInput] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(state=>{
    return state.tasks
  });
  
  useEffect(() => {
    console.log("Tasks a changé :", tasks);
  }, [tasks]);
  

  const handleAddTask = () => {
    if (input.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: input, completed: false }));
      setInput('');
    }
  };
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
    <input 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Ajouter une nouvelle tâche"
    />
    <button onClick={handleAddTask}>Ajouter</button>
    <ul>
      {Array.isArray(tasks) ? tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => handleToggleTask(task.id)}>
            {task.completed ? 'Marquer Incomplète' : 'Marquer Complète'}
          </button>
          <button onClick={() => handleDeleteTask(task.id)}>Supprimer</button>
        </li>
      )):<p>Tasks n'est pas un tableau</p>}
    </ul>
  </div>
  );
}

export default App;
