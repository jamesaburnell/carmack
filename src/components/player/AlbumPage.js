import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectTrack } from './../../actions'
import { AlbumPageContainer, AlbumPageTrack, AlbumPageTrackList } from './styled'
import {BackButton} from '../common'

const AlbumPage = ({ 
    activeAlbum, 
    dispatch,
    history
}) => (
    <AlbumPageContainer className="container">
        
        <BackButton history={history} route={'/'} />
        
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