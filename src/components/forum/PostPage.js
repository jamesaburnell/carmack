import React, { Component } from 'react'
import { connect } from 'react-redux'

class Forum extends Component {

	constructor(props) {
        super(props)
    }
    
	render() {
        const {dispatch} = this.props
        return (
           <div></div>
        )
    }
    
}

export default connect(state => ({
    dispatch: state.dispatch
}))(Forum)
