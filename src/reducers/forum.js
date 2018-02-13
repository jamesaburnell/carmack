import { 
    SELECT_THREAD, 
    THREADS,
    UPVOTE,
    DOWNVOTE
} from './../constants/forum'

import { updateVotes } from './../helpers'

export default function forum(state = {
    threads: THREADS
}, action) {
	
	switch(action.type) {

        case SELECT_THREAD:
            return {
                ...state,
                selectedThread: action.data
            }

        case UPVOTE:
            return {
                ...state,
                threads: updateVotes(1, action.id, state.threads)
            }

        case DOWNVOTE:
            return {
                ...state,
                threads: updateVotes(-1, action.id, state.threads)
            }
		
		default:
			return state

    }
    
}