import React,{ useState } from 'react';
import {useDispatch,useSelector } from 'react-redux';
import { addTask,deleteTask,toggleTask } from './actions/taskAction';

function App() {
  const [input,setInput] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleAddTask = () => {
    dispatch(addTask({id:Date.now(),text:input,completed:false}));
    setInput('');
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default App;
