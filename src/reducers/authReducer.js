import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_SUCCESS,
	REGISTER_FAILURE,
	CLEAN_ERROR_STATES
} from './../constants/authConstants'

export default function reducer(state = {}, action) {
	
	switch(action.type) {
		
		case LOGIN_SUCCESS:
			return {
				...state,
				uid: action.data.uid,
				user: action.data.email,
				error: undefined
			}

		case LOGIN_FAILURE:
			return {
				...state,
				error: action.data
			}

		case LOGOUT_SUCCESS:
			return {
				...state,
				uid: undefined,
				user: undefined,
				error: undefined
			}

		case REGISTER_FAILURE:
			return {
				...state,
				error: action.data
			}

		case CLEAN_ERROR_STATES:
			return {
				...state,
				error: undefined
			}
		
		default:
			return state

	}

}
