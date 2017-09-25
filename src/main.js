import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers/allreducers'
// import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'

import { BrowserRouter as Router } from 'react-router-dom'

const loggerMiddleware = createLogger()
const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware))
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router>
			{ routes }
		</Router>
	</Provider>,
	document.getElementById('app')
)
