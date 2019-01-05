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
import { checkLoginStatus } from '../helpers/util.js'

class Landing extends Component {
	
	constructor(props){
		super(props)
		this.state = {}
	}

	componentWillMount() {
		checkLoginStatus(this.props)
	}

	componentWillUpdate() {
		checkLoginStatus(this.props)
	}

	componentDidUpdate() {
		checkLoginStatus(this.props)		
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