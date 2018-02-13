import {
	BEGIN_LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	BEGIN_REGISTER,
	REGISTER_SUCCESS,
	REGISTER_FAILURE
} from './../constants/authConstants'

import api from './../api'

export function login(options) {
	const { email, password } = options
	return dispatch => {
		// dispatch(loginStart())
		// api.post({
		// 	route: '/login',
		// 	payload: {
		// 		email,
		// 		password
		// 	}
		// })
		// .then(res => JSON.parse(res.body))
		// .then(res => dispatch(!!res.error ? loginFailure(res) : loginSuccess(res)))
		if(email === 'test') {
			dispatch(loginSuccess({
				user: {
					email: 'test',
					token: 6969
				}
			}))
		}
	}
	
}

function loginStart() {
	return {
		type: BEGIN_LOGIN
	}
}

function loginSuccess(data){
	console.log('success!')
	return {
		type: LOGIN_SUCCESS,
		data
	}
}

function loginFailure(res){
	return {
		type: LOGIN_FAILURE,
		data: res
	}
}



export function register(options) {
	const { email, password } = options
	return dispatch => {
		dispatch(registerStart())
		api.post({
			route: '/register',
			payload: {
				email,
				password
			}
		})
		.then(res => JSON.parse(res.body))
		.then(res => dispatch( res.success ? registerSuccess(res) : registerFailure(res) ))
	}
}

function registerStart() {
	return {
		type: BEGIN_REGISTER
	}
}

function registerSuccess(res){
	console.log('success: ', res)
	return {
		type: REGISTER_SUCCESS
	}
}

function registerFailure(res){
	console.error('FAIL: ', res)
	return {
		type: REGISTER_FAILURE
	}
}





