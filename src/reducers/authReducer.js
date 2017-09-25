import {
	LOGIN_SUCCESS
} from './../constants/authConstants'

export default function reducer(state = {}, action) {
	
	switch(action.type) {
		
		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.data.token,
				user: action.data.user
			}

		// case LOGIN_SUCCESS

		default:
			return state

	}

}