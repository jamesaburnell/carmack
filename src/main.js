import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers/allreducers'
// import { syncHistoryWithStore } from 'react-router-redux'

import MainRoutes from './routes'
import Nav from './components/Nav'

import { BrowserRouter as Router } from 'react-router-dom'

const loggerMiddleware = createLogger()
const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware))
// const history = syncHistoryWithStore(browserHistory, store)

import './bootstrap/bootstrap.css'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Nav/>
				<MainRoutes/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
)
