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
            <AlbumsContainer>
                {
                    ALBUMS.map((element, index) => 
                        <Album 
                            artwork={element.artwork}
                            key={`${index}-${element.title}`}
                            openAlbum={this._openAlbum}
                            index={index}
                        />
                    )
                }
            </AlbumsContainer>
        )
    }
}

export default AlbumsController