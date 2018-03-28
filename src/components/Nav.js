import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { HeaderLogoMain } from './commonStyled'

class Nav extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
				<div className="container">
					<div className="navbar-header">
						<HeaderLogoMain>#FOREWARDTHINKERSGROUP</HeaderLogoMain>
					</div>
					<nav className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>
							<li className="nav-item"><Link className="nav-link" to='/forum'>Forum</Link></li>
							<li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
						</ul>
					</nav>
				</div>
			</nav>
		)
	}
}

export default connect( state => ({
	auth: state.authReducer
}))(Nav)

