import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/taskReducers';

export const store = configureStore({
    reducer :{
        tasks:tasksReducer
    }
});