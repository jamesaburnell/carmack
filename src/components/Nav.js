import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { HeaderLogoMain } from './commonStyled'
import { logout } from './../actions'

class Nav extends Component {

	constructor(props) {
		super(props)
		this._handleSignOut = this._handleSignOut.bind(this)
	}

	_handleSignOut() {
		this.props.dispatch(logout())
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
							<li className="nav-item"><Link className="nav-link" to='/forum'>Forum</Link></li>
							<li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
							{
								! this.props.auth.user 
								? <li className="nav-item"><Link className="nav-link" to='/login'>Sign In</Link></li>
								: <li className="nav-item"><a className="nav-link" style={{cursor: 'pointer'}} onClick={this._handleSignOut}>Sign Out</a></li>
							}
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

