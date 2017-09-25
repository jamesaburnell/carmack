import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Album from './Album'
import { ALBUMS } from './../../constants/constants.js'

class AlbumsController extends Component {
    constructor(props) {
        super(props)
        this._openAlbum = this._openAlbum.bind(this)
        this.state = {}
    }

    _openAlbum(index) {
        this.setState({ openIndex: index })
    }

    render() {
        return (
            <div className='albums-container'>
                {
                    ALBUMS.map((element, index) => 
                        <Album 
                        album={element}
                        key={`${index}-${element.title}`}
                        isOpen={index === this.state.openIndex}
                        openAlbum={this._openAlbum}
                        index={index}
                        />
                    )
                }
            </div>
        )
    }
}

export default AlbumsController