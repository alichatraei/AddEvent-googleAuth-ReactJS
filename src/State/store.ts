import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import { rootReducer } from ".";
const store = createStore(rootReducer, {}, applyMiddleware(thunk))
export type TStore = ReturnType<typeof rootReducer>
export default store;