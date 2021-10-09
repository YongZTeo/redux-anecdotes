import { createStore } from 'redux'
import anecdoteReducer from '../reducers/anecdoteReducer'
import notifReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({ anecdote: anecdoteReducer, notif: notifReducer, filter: filterReducer })
const store = createStore(reducers, 
  process.env.REACT_ENV !== "PROD" ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk))

export default store