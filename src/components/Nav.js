import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				
				<div className="container">
					
					<div className="navbar-header">

						<Link to='/' className="navbar-brand"><img src='nav-brand-2-resize.png'></img></Link>

					</div>

					<ul className="nav navbar-nav navbar-right">
						<li><Link to='/login'>Login</Link></li>
						<li><Link to='/register'>Home</Link></li>
					</ul>

				</div>

			</nav>
		)
	}
}