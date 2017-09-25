import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { findDOMNode } from 'react-dom'
import Nav from './Nav.js'
import AlbumsController from './player/AlbumsController.js'

import './../assets/Align.mp3'
import './../assets/testimg1.jpg'
import './../assets/testimg2.jpg'
import './Landing.scss'

export default class Landing extends Component {
	
	constructor(props){
		super(props)
		this.state = {}
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