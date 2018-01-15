import React, { Component } from 'react'
import Waveform from './WaveForm'
import { connect } from 'react-redux'
import './player.scss'

class Player extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        const { track, trackSelected } = this.props
        return (
            <div className="player-container">
                { 
                    trackSelected && 
                    <Waveform 
                    audioFile={`${track}`}
                    />
                }
            </div>
        )
    }
}

export default connect(state => ({
    trackSelected: state.player.trackSelected,
    track: state.player.track
}))(Player)