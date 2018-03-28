import React, { Component } from 'react'
import Waveform from './WaveForm'
import { connect } from 'react-redux'
import { PlayerContainer } from './styled'

class Player extends Component {
    
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        const { track, trackSelected } = this.props
        return (
            <PlayerContainer>
                {  trackSelected && <Waveform audioFile={`${track}`} /> }
            </PlayerContainer>
        )
    }
}

export default connect(state => ({
    trackSelected: state.player.trackSelected,
    track: state.player.track
}))(Player)