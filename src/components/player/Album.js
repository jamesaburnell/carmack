import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import Waveform from './WaveForm'

class Album extends Component {
    constructor(props){
        super(props)
        this._toggleOpen = this._toggleOpen.bind(this)
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        const {artwork} = this.props.album
        let node = findDOMNode(this)
        node.style.background = `url('${artwork}') center`
    }

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
                height: isOpen ? 500 : hovering ? 60 : 50,
                width: isOpen ? 500 : hovering ? 400 : 380
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