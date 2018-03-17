import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Album from './Album'
import { ALBUMS } from './../../constants/constants.js'
import { selectAlbum } from './../../actions'
import { AlbumsContainer } from './styled'

class AlbumsController extends Component {
    constructor(props) {
        super(props)
        this._openAlbum = this._openAlbum.bind(this)
        this.state = {}
    }

    _openAlbum(index) {
        this.setState({ openIndex: index })
        this.props.dispatch(selectAlbum(ALBUMS[index]))
        this.props.history.push('/album')
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