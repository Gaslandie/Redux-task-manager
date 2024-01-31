import {ADD_TASK,DELETE_TASK,TOGGLE_TASK} from '../actions/taskAction';

//Etat initial des tâches
const initialState = {
    tasks:[]
};

//Reducer pour gerer l'etat des tâches
const tasksReducer = (state = initialState,action) => {
    switch(action.type){//en fonction du type d'action
        case ADD_TASK:
            //ajouter une nouvelle tache à la liste
            return{
                ...state,
                tasks:[...state.tasks,action.payload]
            };
        case DELETE_TASK:
            //supprimer une tache de la liste
            return{
                ...state,
                tasks:state.tasks.filter(task => task.id !== action.payload)
            };
        case TOGGLE_TASK:
            //basculer l'etat de completion d'une tâche
            return {
                ...state,
                tasks: state.tasks.map(task => 
                    task.id === action.payload ? {...task,completed: !task.completed}:task
                    )
            };
        default:
            //Retourne l'etat actuel
            return state;

    }
}

export default tasksReducer;