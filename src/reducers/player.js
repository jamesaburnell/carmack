import {
    SELECT_TRACK,
    CLOSE_PLAYER
} from './../constants/player'

export default function player(state = {}, action) {
    
    switch(action.type) {
		
        case SELECT_TRACK:
			return {
				...state,
                trackSelected: true,
                track: action.data
            }
            
        case CLOSE_PLAYER:
            return {
                ...state,
                trackSelected: false
            }
		default:
			return state

    }
    
}