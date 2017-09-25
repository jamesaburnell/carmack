import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Waveform from './WaveForm'

class Album extends Component {
    constructor(props){
        super(props)
        // this._handleMouseOver = this._handleMouseOver.bind(this)
        this._toggleOpen = this._toggleOpen.bind(this)
        this.state = {
            open: false
        }
    }

    // _handleMouseOver() { }

    _toggleOpen() {
        this.setState({open: !this.state.open})
    }

    render() {
        const { open, hovering } = this.state
        const { album, openAlbum, isOpen, index } = this.props
        const { tracks, title, artwork } = album

        return (
            <div 
            className={`album-wrapper ${!isOpen ? 'cursor' : ''}`}
            onClick={() => openAlbum(index)}
            onMouseEnter={() => this.setState({ hovering: true })}
            onMouseLeave={() => this.setState({ hovering: false })}
            style={{
                height: isOpen ? (170*tracks.length) : hovering ? 20 : 10,
                width: isOpen ? '60%' : hovering ? '53%' : '50%',
                backgroundImage: `url('./../assets/${artwork}') center`
            }}
            >
                {
                    isOpen ? tracks.map((element, index) => 
                        <Waveform 
                        audioFile={element}
                        key={index}
                        />
                    ) 
                    : <div>{!!hovering && title}</div>
                }
            </div>
        )
    }
}

export default Album

Album.propTypes = {
    album: PropTypes.object.isRequired,
}