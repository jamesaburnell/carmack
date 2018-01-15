import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './albumPage.scss'
import { selectTrack } from './../../actions'

class AlbumPage extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { activeAlbum, dispatch } = this.props
        return (
            <div className="album-page-container container">
                <div 
                className="back-btn btn btn-primary"
                onClick={() => this.props.history.push('/')}
                >
                    back
                </div>
                <h1>{activeAlbum.title}</h1>
                <ul className="albums-page-track-list">
                    {
                        activeAlbum.tracks.map((ele, index) => 
                            <li 
                            onClick={() => dispatch(selectTrack(ele))}
                            className="album-page-track" 
                            key={index}
                            >
                                {ele}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default connect(state => ({
    activeAlbum: state.albums.activeAlbum
}))(AlbumPage)