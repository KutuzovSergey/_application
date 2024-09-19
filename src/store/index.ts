import { applyMiddleware, combineReducers, createStore } from "redux";
import { userDataReducer } from "./userDataReducer.ts";
import { thunk } from "redux-thunk";
import { documentsReducer } from "./documentsReducer.ts";

const rootReducer = combineReducers({
    userData: userDataReducer,
    documents: documentsReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);