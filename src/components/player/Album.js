import React from 'react'
import PropTypes from 'prop-types'
import { AlbumWrapper, AlbumHoverBox } from './styled'
import { Cursor } from './../commonStyled'

const Album = ({
    artwork, 
    openAlbum, 
    index
}) => (
    <AlbumWrapper artwork={artwork} onClick={() => openAlbum(index)} >
        <Cursor>
            <AlbumHoverBox />
        </Cursor>
    </AlbumWrapper>
)

export default Album

Album.propTypes = {
    artwork: PropTypes.string.isRequired,
}