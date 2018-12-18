import request from 'request'
import Promise from 'bluebird'
import * as CONFIG from './../config'

function makeRequest(options) {
	return new Promise ((resolve, reject) => {
		request(options, (error, response, body) => {
			if(error){
				console.error(error)
			}
			resolve(response)
		})
	})
}

export default {

	query() {
		console.log('query')
	},

	sendEmailFromLandingPage(options) {
		var requestOptions = {
			url: CONFIG.uri + '/send-email',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...options })
		}
		return makeRequest(requestOptions)
	},

	get(options) {
		var requestOptions = {
			url: `${CONFIG.uri}${options.route}${options.queryString || ''}`,
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...options.payload })
		}
		return makeRequest(requestOptions)
	},

	post(options) {
		var requestOptions = {
			url: `${CONFIG.uri}${options.route}${options.queryString || ''}`,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...options.payload })
		}
		return makeRequest(requestOptions)
	},

	put(options) {
		var requestOptions = {
			url: `${CONFIG.uri}/${options.route}${options.queryString || ''}`,
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...options.payload })
		}
		return makeRequest(requestOptions)
	},

}