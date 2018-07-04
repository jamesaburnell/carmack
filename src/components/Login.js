import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, cleanErrorStates } from './../actions'
import { LoginForm, LoginFormSection, LoginError } from './commonStyled'

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
			console.error('error')
		}
	}

	render() {
		return (
			<div>
				<div ref="container" className="container">	
					
					<LoginForm className="form-group">
						<h4>Sign In</h4>
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

					{
						!!this.props.error &&
						<LoginError>
							{this.props.error}
						</LoginError>
					}

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
