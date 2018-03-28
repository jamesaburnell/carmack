import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectTrack } from './../../actions'
import { AlbumPageContainer, AlbumPageTrack, AlbumPageTrackList } from './styled'

const AlbumPage = ({ 
    activeAlbum, 
    dispatch,
    history
}) => (
    <AlbumPageContainer className="container">
        <div 
            className="back-btn btn btn-primary"
            onClick={() => history.push('/')}
        >
            back
        </div>
        <h1>{activeAlbum.title}</h1>
        <AlbumPageTrackList>
            {
                activeAlbum.tracks.map((ele, index) => 
                    <AlbumPageTrack 
                        onClick={() => dispatch(selectTrack(ele))} 
                        key={index} 
                    >
                        {ele}
                    </AlbumPageTrack>
                )
            }
        </AlbumPageTrackList>
    </AlbumPageContainer>
)


export default connect(state => ({
    activeAlbum: state.albums.activeAlbum
}))(AlbumPage)