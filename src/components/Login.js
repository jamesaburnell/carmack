import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, cleanErrorStates } from './../actions'
import { LoginForm, LoginFormSection, LoginError } from './commonStyled'
import { bindAll } from '../helpers/util'

class Login extends Component {
	
	constructor(props){
		super(props)
		
		bindAll([
			'_handleSubmit',
			'_update'
		], this)

		this.state = {
			email: '',
			password: ''
		}
	}

	componentDidUpdate() {
		const { user, uid, history } = this.props
		if(!!user && !!uid) history.push('/')
	}

	componentWillUnmount() {
		const { error, dispatch } = this.props
		if(!!error) dispatch(cleanErrorStates())
	}

	_handleSubmit() {
		const { email, password } = this.state
		const { dispatch } = this.props
		if(email.length > 0 && password.length > 0) {
			 dispatch(login(email, password))
		} else {
			console.error('error') // check error, function? 
		}						   // determine which error, then return string of that error, save to state? 
	}							   // then render error component

	_update(key, value) {
		this.setState({[key]: value})
	}

	render() {
		return (
			<div>
				<div className="container">	
					
					<LoginForm className="form-group">
						<h4>Sign In</h4>
						<LoginFormSection>
							<label>email</label>
							<input 
							type="text" 
							onChange={e => this._update('email', e.target.value)}
							/>
						</LoginFormSection>
						<LoginFormSection>
							<label>password</label>
							<input 
							type="password" 
							onChange={e => this._update('password', e.target.value)}
							/>
						</LoginFormSection>
					</LoginForm>

					<button className="btn btn-default" onClick={this._handleSubmit} >
						Login
					</button>

					<Link className="btn btn-default" to='/register'>Register</Link>

					{!!this.props.error &&
					<LoginError>
						{this.props.error}
					</LoginError>}

				</div>
			</div>
		)
	}
}

export default connect(state => ({
	dispatch: state.dispatch,
	user: state.authReducer.user,
	uid: state.authReducer.uid,
	error: state.authReducer.error
}))(Login)
