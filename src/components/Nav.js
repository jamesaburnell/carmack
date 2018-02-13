import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './nav.scss'

class Nav extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<div className="header-logo-main">#FOREWARDTHINKERSGROUP</div>
					</div>
					<ul className="nav navbar-nav navbar-right">
						<li><Link to='/login'>Login</Link></li>
						<li><Link to='/forum'>Forum</Link></li>
						<li><Link to='/'>Home</Link></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default connect( state => ({
	auth: state.authReducer
}))(Nav)

