import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from './../../actions'
import RegisterStep1 from './RegisterStep1'
import RegisterStep2 from './RegisterStep2'
import RegisterStep3 from './RegisterStep3'

class Register extends Component {
	
	constructor(props){
		super(props)
		this._handleSubmit = this._handleSubmit.bind(this)
		this._next = this._next.bind(this)
		this._updateInformation = this._updateInformation.bind(this)
		this._renderStep = this._renderStep.bind(this)

		this.state = {
			step: 1,
			email: '',
			password: '',
			passwordConf: ''
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
		this.props.dispatch(submitUser({email, password}))
		this.props.history.push('/')
	}

	_renderStep() {
		const { step } = this.state
		const { _next, _updateInformation } = this
		switch(step) {
			case 1: 
				return RegisterStep1({_next, _updateInformation})
						
			case 2:
				return RegisterStep2({_next, _updateInformation})
			case 3:
				return RegisterStep3({_submit, _updateInformation})
			default:
				break
		}
	}

	render() {
		return (
			<div>
				<div ref="container" className="container">
					<h4>
						Register
					</h4>
					{ this._renderStep() }
				</div>
			</div>
		)
	}
}

export default connect(state => ({
	dispatch: state.dispatch
}))(Register)