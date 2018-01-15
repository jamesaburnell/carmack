import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import authReducer from './authReducer'
import albums from './albums'
import player from './player'

export default combineReducers({
	authReducer,
	albums,
	player,
	routing: routerReducer
})