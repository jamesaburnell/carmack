import {
	BEGIN_LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_SUCCESS,
	BEGIN_REGISTER,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	CLEAN_ERROR_STATES
} from './../constants/authConstants'

import api from './../api'

export function login(email, password) {
	return dispatch => {
		firebase	
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(res => dispatch(loginSuccess(res)))
			.catch(err => dispatch(loginFailure(err)))
	}
}

function loginStart() {
	return {
		type: BEGIN_LOGIN
	}
}

function loginSuccess(data){
	return {
		type: LOGIN_SUCCESS,
		data
	}
}

function loginFailure(err) {
	let e = err.code.split('/'),
		errorMessage

	if(e[0] === 'auth') {
		errorMessage = 'invalid email or password'
	} else {
		errorMessage = 'unknown error'
	}

	return {
		type: LOGIN_FAILURE,
		data: errorMessage
	}
}

function logoutSuccess(res) {
	return {
		type: LOGOUT_SUCCESS
	}
}

export function logout() {
	return dispatch => {	
		firebase
			.auth()
			.signOut()
			.then(res => dispatch(logoutSuccess(res)))
			.catch(err => dispatch(logoutSuccess(err)));
	}
}

export function cleanErrorStates() {
	return {
		type: CLEAN_ERROR_STATES
	}
}

export function createUser(email, password, daw, soundcloud, website) {
	return dispatch => {
		dispatch(registerStart())
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(res => dispatch(saveToFirestore({...res, daw, soundcloud, website})))
			.catch(err => dispatch(registerFailure(err)))
	}
}

function registerStart() {
	return {
		type: BEGIN_REGISTER
	}
}

function saveToFirestore(res) {
	const { uid, email, daw, soundcloud, website } = res
	return dispatch => {
		firestore
			.collection("user_info")
			.doc(uid)
			.set({email, daw, soundcloud, website})
			.then(() => dispatch(registerSuccess(res)))
			.catch(error => dispatch(registerFailure(res))) // should have a 'clean up auth database' method here first
	}
}

function registerSuccess(res) {
	return {
		type: LOGIN_SUCCESS,
		data: res
	}
}

function registerFailure(res){
	return {
		type: REGISTER_FAILURE,
		data: res.message
	}
}





