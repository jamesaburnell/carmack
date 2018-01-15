import React from 'react'
import PropTypes from 'prop-types'

const Album = ({
    album, 
    openAlbum, 
    isOpen, 
    index
}) => {
    const { artwork } = album
    return (
        <div 
        className={`album-wrapper cursor`}
        onClick={() => openAlbum(index)}
        style={{background: `url('${artwork}') center`}}
        >
            <div className="album-hover-box" />
        </div>
    )
}

export default Album

Album.propTypes = {
    album: PropTypes.object.isRequired,
}