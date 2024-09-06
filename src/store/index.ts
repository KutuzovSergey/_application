import { applyMiddleware, combineReducers, createStore } from "redux";
import { userDataReducer } from "./userDataReducer.ts";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    userData: userDataReducer,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);