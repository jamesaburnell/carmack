import {
    SELECT_TRACK,
    CLOSE_PLAYER
} from './../constants/player.js'

export function selectTrack(data) {
    console.log('select track action')
    return {
        type: SELECT_TRACK,
        data
    }
}

export function closePlayer() {
    console.log('close player action')
    return {
        type: CLOSE_PLAYER
    }
}