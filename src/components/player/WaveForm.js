import React, { Component } from 'react'
import Wavesurfer from 'react-wavesurfer'
import PropTypes from 'prop-types'

export default class Waveform extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			playing: false,
			pos: 0
		}
		this._handlePosChange = this._handlePosChange.bind(this)
		this._togglePlay = this._togglePlay.bind(this)
	}

	_handlePosChange(e) {
		this.setState({ pos: e.originalArgs[0] })
	}

	_togglePlay(){
		this.setState({ playing: !this.state.playing })
	}

	render() {
		const { pos, playing } = this.state
		const { audioFile } = this.props
		
		return (
			<div className='waveform-container'>

				<div
				onClick={this._togglePlay}
				> 
					{ this.state.playing ? 'PAUSE' : 'PLAY' } 
				</div>
				
				<Wavesurfer
				audioFile={audioFile}
				pos={pos}
				onPosChange={this._handlePosChange}
				playing={playing}
				options={{ barWidth: 2, height: 50 }}
				responsive={true}
				/>

			</div>
		)
	}
}

Waveform.propTypes = {
	audioFile: PropTypes.string.isRequired
}
