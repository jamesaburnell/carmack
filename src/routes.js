import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './app'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/register'

const MainRoutes = () =>	
	<div>
		<Switch>
			<Route exact path='/' component={Landing} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
		</Switch>
	</div>

export default MainRoutes