import {
    SELECT_ALBUM
} from './../constants/albums'

export function selectAlbum(data) {
    return {
        type: SELECT_ALBUM,
        data
    }
}