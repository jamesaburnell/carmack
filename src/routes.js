import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './app'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/register'
import AlbumPage from './components/player/AlbumPage'
import Forum from './components/forum/Forum.js'
import PostPage from './components/forum/PostPage.js'

const MainRoutes = () =>	
	<div>
		<Switch>
			<Route exact path='/' component={Landing} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/album' component={AlbumPage} />
			<Route path='/forum' component={Forum} />
			<Route path='/post' component={PostPage} />
		</Switch>
	</div>

export default MainRoutes