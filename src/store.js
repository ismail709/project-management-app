import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { projectReducer } from "./reducers/projectReducer";


const rootReducer = combineReducers({
    users:userReducer,
    projects:projectReducer
})
export const store = createStore(rootReducer);