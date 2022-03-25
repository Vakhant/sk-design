import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    
    form: formReducer,
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// let state: AppStateType
// state.dialogsPage.messagesData
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
//@ts-ignore
window._store = store
export default store