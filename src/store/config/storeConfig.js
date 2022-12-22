// import { createStore } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "../reducers/rootReducer"
import { configureStore } from "@reduxjs/toolkit";

// export const createAppStore = () =>{
//  let store = createStore(rootReducer, composeWithDevTools())
//  return store
// }

export const createAppStore = () =>{
    let store =  configureStore({reducer: rootReducer});
    return store
   }