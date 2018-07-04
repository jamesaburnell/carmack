import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { register, createUser, cleanErrorStates } from './../../actions'
import RegisterStep1 from './RegisterStep1'
// import RegisterStep2 from './RegisterStep2'
// import RegisterStep3 from './RegisterStep3'
import { LoginError } from './../commonStyled'

class Register extends Component {
	
	constructor(props){
		super(props)
		this._handleSubmit = this._handleSubmit.bind(this)
		this._next = this._next.bind(this)
		this._updateInformation = this._updateInformation.bind(this)
		this._renderStep = this._renderStep.bind(this)
		this._submit = this._submit.bind(this)

		this.state = {
			step: 1,
			email: '',
			password: '',
			passwordConf: '',
			daw: '',
			soundcloud: '',
			website: ''
		}
	}

	componentWillUnmount() {
		const { error, dispatch } = this.props
		if(!!error) dispatch(cleanErrorStates())
	}

	componentDidUpdate() {
		const { user, uid } = this.props
		if(!!user && !!uid) {
			this.props.history.push('/')
		}
	}

	_handleSubmit() {
		const { email, password } = this.state
		if(email.length > 0 && password.length > 0)
			this.props.dispatch(register({email, password}))
		else console.error('error')
	}

	_next() { this.setState({step: this.state.step+1}) }

	_updateInformation({type, value}) { this.setState({[type]: value}) }

	_submit() {
		const { email, password, daw, soundcloud, website} = this.state
		this.props.dispatch(createUser(email, password, daw, soundcloud, website))
	}

	_onToken(token) {
		console.log('token')
	}

	_renderStep() {
		const { _updateInformation, _submit } = this
		return RegisterStep1({_submit, _updateInformation})
	}

	render() {
		const { error } = this.props
		return (
			<div className="container">
				<h4>Register</h4>
				{ this._renderStep() }
				{
					!!error && 
					<LoginError>
						{ error }
					</LoginError>
				}
			</div>
		)
	}
}

export default connect(state => ({
	dispatch: state.dispatch,
	error: state.authReducer.error,
	uid: state.authReducer.uid,
	user: state.authReducer.user
}))(Register)