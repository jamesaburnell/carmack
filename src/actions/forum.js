import {
    SELECT_THREAD
} from './../constants/forum'

export function selectThread(data) {
    return {
        type: SELECT_THREAD,
        data
    }
}