import {
	LOGIN_SUCCESS
} from './../constants/authConstants'

export default function reducer(state = {}, action) {
	
	switch(action.type) {
		
		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.data.user.token,
				user: action.data.user.email
			}


		default:
			return state

	}

}