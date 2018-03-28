import styled from 'styled-components'

export const AlbumsContainer = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 300px 300px 300px;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-top: 90px;
`

export const AlbumWrapper = styled.div`
    position: relative;
    box-shadow: 0px 1px 2px #585858;
    -webkit-transition: height 0.2s, width 0.2s, -webkit-transform 0.2s;
    transition: height 0.2s, width 0.2s, transform 0.2s;
    transition-timing-function: ease-in-out;
    width: 100%;
    cursor: pointer;
    background: url('${({artwork}) => `${artwork}`}') center;
`

export const AlbumHoverBox = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    transition: 0.2s;
    &:hover {
        background-color: rgba(255,255,255, 0.3);
        transition: 0.2s;
    }
`

export const WaveFormContainer = styled.div`
    padding: 20px;
    width: 100%;
`

export const PlayerContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    box-shadow: 0px 5px 10px #000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const AlbumPageContainer = styled.div`
    margin-top: 100px;
`

export const AlbumPageTrackList = styled.ul``

export const AlbumPageTrack = styled.li`
    cursor: pointer;
    &:hover {
        color: lightblue;
    }
`

export const PlayButton = styled.button`
    width: 50px;
`