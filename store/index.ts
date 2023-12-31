import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import authSlice from "./slices/authSlice";
import taskSlice from "./slices/taskSlice";


const rootReducer = combineReducers({
    // auth: authSlice,
    tasks: taskSlice,
})

const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store; 
export default store;