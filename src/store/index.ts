import { applyMiddleware, combineReducers, createStore } from "redux";
import { toDoListReducer } from "./toDoListReducer.ts";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    toDoList: toDoListReducer,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);