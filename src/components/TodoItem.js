import React from "react";
import { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { markComplete, deleteItem } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  const markCompleteds = () => {
    dispatch(markComplete({ id, completed: !completed }));
    setActive(!isActive);
  };
  const deleteAction = () => {
    dispatch(deleteItem({ id }));
  };
  return (
    <>
    {/* en fonctiotn de notre isActive false ou true,on a la classe completed ou pas pour li */}
      {isActive ? (
        // si true
        <li className="todo-item completed"> 
          <section className="item">
            <label className="item-name">
              <input
                type="checkbox"
                onClick={() => {
                  markCompleteds();
                }}
              />
              <div className="checkmark smooth-transition"></div>
            </label>
            <p>{title}</p>
          </section>
          <section>
            <button
              className="delete-btn"
              onClick={() => {
                deleteAction();
              }}
            >
              X
            </button>
          </section>
        </li>
      ) : ( //si false
        <li className="todo-item">
          <section className="item">
            <label className="item-name">
              <input
                type="checkbox"
                onClick={() => {
                  markCompleteds();
                }}
              />
              <div className="checkmark smooth-transition"></div>
            </label>
            <p>{title}</p>
          </section>
          <section>
            <button
              className="delete-btn"
              onClick={() => {
                deleteAction();
              }}
            >
              X
            </button>
          </section>
        </li>
      )}
    </>
  );
};

export default TodoItem;