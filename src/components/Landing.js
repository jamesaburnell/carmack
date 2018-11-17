import React, { Component } from 'react'
import { connect } from 'react-redux'
import AlbumsController from './player/AlbumsController.js'
import { AppContainer } from './commonStyled'
import './../assets/Align.mp3'
import './../assets/testimg1.jpg'
import './../assets/testimg2.jpg'
import './../assets/testimg3.jpg'
import './../assets/testimg4.jpg'
import './../assets/testimg5.jpg'
import './../assets/testimg6.jpg'

class Landing extends Component {
	
	constructor(props){
		super(props)
		this._checkLoginStatus = this._checkLoginStatus.bind(this)
		this.state = {}
	}

	componentWillMount() {
		this._checkLoginStatus()
	}

	componentWillUpdate() {
		this._checkLoginStatus()
	}

	componentDidUpdate() {
		this._checkLoginStatus()		
	}
	
	_checkLoginStatus() {
		const { user, uid } = this.props.auth
		if(!user || !uid) {
			this.props.history.push('/login')
		}
	}

	render() {
		return (
			<AppContainer>
				<AlbumsController history={this.props.history} dispatch={this.props.dispatch} />
			</AppContainer>
		)
	}
}

export default connect(state => ({
	auth: state.authReducer
}))(Landing)