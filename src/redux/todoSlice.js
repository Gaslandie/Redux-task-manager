//CreateSlice est une fonction de Redux toolkit qui permet de creer des reducers et des actions de manière simplifiée
import { createSlice } from "reduxjs/toolkit";
//UUid pour des id uniques
import { v4 as uuid} from 'uuid';

export const todoSlice = createSlice({
    //nom de notre slice
    name: "todos",
    //l'etat initial pour notre slice
    initialState:[
        { id: uuid(), title: "Make a to do list", completed: false },
        { id: uuid(), title: "Check off the first item", completed: false },
        {
          id: uuid(),
          title: "Realize you already did two things on the list",
          completed: false,
        },
        {
          id: uuid(),
          title: "Reward yourself with a nice cup of coffee",
          completed: false,
        },
      ],
      //reducers
      reducers:{
        addTodo: (state,action) =>{
            const todo ={
                id:uuid(),
                title:action.payload.title,
                completed:false,
            };
            //quand on fera appel à addTodo,on recuper notre todo qu'on push dans letat des todos
            state.push(todo);
        },
        markComplete:(state,action) => {
            //on utilise findIndex,pour recupere notre todo et changer son etat de completion 
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteItem:(state,action) => {
            //on return les todos dans state sauf celui dont l'id est specifié dans action
            return state.filter((todo) => todo.id !== action.payload.id);
        }
      }
})

//todoSlice.actions etant un objet qui contient les actions generé automatiquement par notre slice 
export const { addTodo,markComplete,deleteItem } = todoSlice.actions;

//todoSlice.reducer objet qui contient les reducers individuls qu'on a ici
export default todoSlice.reducer;