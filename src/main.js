import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { BrowserRouter as Router } from 'react-router-dom'
import reducers from './reducers/allreducers'
const loggerMiddleware = createLogger()
const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware))

import MainRoutes from './routes'
import Nav from './components/Nav'
import Player from './components/player/Player'

import './bootstrap/bootstrap.css'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Nav/>
				<MainRoutes/>
				<Player />
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
)
