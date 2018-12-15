import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { BrowserRouter as Router } from 'react-router-dom'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from 'react-apollo'
import * as CONFIG from '../config'
import reducers from './reducers/allreducers'
import MainRoutes from './routes'
import Nav from './components/Nav'
import Player from './components/player/Player'
import './bootstrap/bootstrap.css'

const loggerMiddleware = createLogger()
const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware))

// Initialize Firebase
firebase.initializeApp(CONFIG.firebase)
var firestore = firebase.firestore()
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)

const client = new ApolloClient({
	uri: "http://localhost:8000/graphql"
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<Router>
				<div>
					<Nav/>
					<MainRoutes/>
					<Player />
				</div>
			</Router>
		</Provider>
	</ApolloProvider>,
	document.getElementById('app')
)