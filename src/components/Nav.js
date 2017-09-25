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
						<li><a href='tel:3106833275'>(310) 683-3275</a></li>
						<li style={{cursor: 'pointer'}}><a onClick={this.props.openEmailModal}>Contact Us</a></li>
						<li><Link to='/login'>Login</Link></li>
						<li><Link to='/register'>Register</Link></li>
					</ul>

				</div>

			</nav>
		)
	}
}