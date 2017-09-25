import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import authReducer from './authReducer'

export default combineReducers({
	authReducer,
	routing: routerReducer
})