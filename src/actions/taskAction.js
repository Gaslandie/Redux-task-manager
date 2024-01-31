//Types d'actions
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

//action pour ajout de tache

export const addTask = task => ({
    type: ADD_TASK,
    payload:task
});

//action pour supprimer une tache
export const deleteTask = taskId => ({
    type: DELETE_TASK,
    payload: taskId
});

//action toggle task
export const toggleTask = taskId => ({
    type: TOGGLE_TASK,
    payload: taskId
});