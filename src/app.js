import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'

class App extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		...state,
		router: ownProps
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)