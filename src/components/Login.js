import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Nav from './Nav'

import { login } from './../actions'

class Login extends Component {
	
	constructor(props){
		super(props)
		this._handleSubmit = this._handleSubmit.bind(this)
		this.state = {
			email: '',
			password: ''
		}
	}

	componentDidUpdate() {
		console.log('update')
		const { user, token, history } = this.props
		console.log(user, token, this.props)
		if(!!user && !!token) history.push('/')
	}

	_handleSubmit() {
		const { email, password } = this.state
		const { dispatch } = this.props
		if(email.length > 0 && password.length > 0) dispatch(login({ email, password }))
		else console.error('error')
	}

	render() {
		console.log('mount')
		return (

			<div>

				<div ref="container" className="container">	
					
					<div className="sign-in-form">

						<h4>Login</h4>

						<label>
							email
							<input 
							type="text" 
							onChange={e => this.setState({email: e.target.value})}
							/>
						</label>
						
						<label>
							password
							<input 
							type="password" 
							onChange={e => this.setState({password: e.target.value})}
							/>
						</label>

					</div>

					<button 
					className="btn btn-default"
					onClick={this._handleSubmit}
					>
						Submit
					</button>

				</div>

			</div>

		)
	}
}

export default connect(state => ({
	dispatch: state.dispatch,
	user: state.authReducer.user,
	token: state.authReducer.token
}))(Login)
