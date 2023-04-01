import {createStore, applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import TodoReducer from './reducers'
import thunk from 'redux-thunk'
const rootreducer=combineReducers({
    TodoReducer
})
export const Store=createStore(rootreducer,applyMiddleware(thunk));