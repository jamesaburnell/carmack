import { SELECT_THREAD, THREADS } from './../constants/forum'

export default function forum(state = {threads: THREADS}, action) {
	
	switch(action.type) {

        case SELECT_THREAD:
            return {
                ...state,
                selectedThread: action.data
            }
		
		default:
			return state

    }
    
}