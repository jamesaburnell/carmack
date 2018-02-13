import {
    SELECT_THREAD,
    UPVOTE,
    DOWNVOTE
} from './../constants/forum'

export function selectThread(data) {
    return {
        type: SELECT_THREAD,
        data
    }
}

export function upvote(id) {
    return {
        type: UPVOTE,
        id
    }
}

export function downvote(id) {
    return {
        type: DOWNVOTE,
        id
    }
}