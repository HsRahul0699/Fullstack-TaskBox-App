import {combineReducers,createStore,applyMiddleware} from 'redux'
import tasksReducer from '../reducers/tasksReducer'
import thunk from 'redux-thunk'
const configureStore=()=>{
    const store=createStore(combineReducers({
        tasks:tasksReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore