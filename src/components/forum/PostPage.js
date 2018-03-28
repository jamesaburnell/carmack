import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostPage extends Component {

	constructor(props) {
        super(props)
    }
    
	render() {
        const {selectedThread} = this.props
        console.log('SELECTED THREAD: ', selectedThread)
        return (
           <div>POST</div>
        )
    }
}

export default connect(state => ({
    selectedThread: state.forum.selectedThread
}))(PostPage)
