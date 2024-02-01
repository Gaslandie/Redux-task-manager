import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
    const [value,setValue] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(value){
            dispatch(addTodo({title:value}));
        }
    }
  return (
    <form onSubmit={handleSubmit} className='form-input'>
        <input type="text"
               id='todo-input'
               placeholder='add a new todo'
               value={value}
               onChange={(event) => setValue(event.target.value)}  
        />
        <button className="smooth-transition" type="submit">
        +
        </button>
    </form>
  )
}

export default AddTodoForm;