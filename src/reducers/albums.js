import {
	SELECT_ALBUM
} from './../constants/albums'

export default function albums(state = {activeAlbum: null}, action) {
	
	switch(action.type) {
		
        case SELECT_ALBUM:
        console.log('in actions: ', action.data)
			return {
				...state,
				activeAlbum: action.data
			}

		default:
			return state

    }
    
}