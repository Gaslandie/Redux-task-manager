import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export default configureStore({//configuration,creation de notre store
    reducer:{
        todos:todoReducer
    }
})