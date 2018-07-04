import React, { Component } from 'react'
import Waveform from './WaveForm'
import { connect } from 'react-redux'
import { PlayerContainer } from './styled'

const Player = ({ track, trackSelected }) => (
    <PlayerContainer>
        {  trackSelected && <Waveform audioFile={`${track}`} /> }
    </PlayerContainer>
)

export default connect(state => ({
    trackSelected: state.player.trackSelected,
    track: state.player.track
}))(Player)