import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { login } from './../actions'
import { LoginForm, LoginFormSection } from './commonStyled'

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
		const { user, token, history } = this.props
		if(!!user && !!token) history.push('/')
	}

	_handleSubmit() {
		const { email, password } = this.state
		const { dispatch } = this.props
		if(email.length > 0 && password.length > 0) dispatch(login({ email, password }))
		else console.error('error')
	}

	render() {
		return (
			<div>
				<div ref="container" className="container">	
					<LoginForm className="form-group">
						<h4>Login</h4>
						<LoginFormSection>
							<label>email</label>
							<input 
							type="text" 
							onChange={e => this.setState({email: e.target.value})}
							/>
						</LoginFormSection>
						<LoginFormSection>
							<label>password</label>
							<input 
							type="password" 
							onChange={e => this.setState({password: e.target.value})}
							/>
						</LoginFormSection>
					</LoginForm>
					<button 
					className="btn btn-default"
					onClick={this._handleSubmit}
					>
						Login
					</button>
					<Link className="btn btn-default" to='/register'>Register</Link>
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
