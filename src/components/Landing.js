import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { findDOMNode } from 'react-dom'
import Nav from './Nav.js'
import AlbumsController from './player/AlbumsController.js'
import './../assets/Align.mp3'
import './../assets/testimg1.jpg'
import './../assets/testimg2.jpg'
import './../assets/testimg3.jpg'
import './../assets/testimg4.jpg'
import './../assets/testimg5.jpg'
import './../assets/testimg6.jpg'
import './Landing.scss'

class Landing extends Component {
	
	constructor(props){
		super(props)
		this._checkLoginStatus = this._checkLoginStatus.bind(this)
		this.state = {}
	}

	componentWillMount() {
		this._checkLoginStatus()
	}

	_checkLoginStatus() {
		const { user, token } = this.props.auth
		if(!user && !token) {
			this.props.history.push('/login')
		}
	}

	render() {
		return (
			<div className='app-container'>
				{/* <Nav /> */}
				<AlbumsController />
			</div>
		)
	}
}

export default connect(state => ({
	auth: state.authReducer
}))(Landing)