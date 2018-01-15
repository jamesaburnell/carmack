import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import authReducer from './authReducer'
import albums from './albums'
import player from './player'
import forum from './forum'

export default combineReducers({
	authReducer,
	albums,
	player,
	forum,
	routing: routerReducer
})