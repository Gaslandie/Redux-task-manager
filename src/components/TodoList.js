import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos); //on recupere notre state depuis notre store à l'aide de useSelector et extrait nos todos
    return(
        <ul className="todo-list">
            {todos.map((todo,id) => (
                 <TodoItem key={id} 
                 id={todo.id}
                 title={todo.title}
                 completed={todo.completed}
                 />
            ) 
            )}
        </ul>
    )
}

export default TodoList;