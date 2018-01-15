import React, { Component } from 'react'
import { connect } from 'react-redux'

class Forum extends Component {

	constructor(props) {
        super(props)
	}

	render() {
        return (
            <div style={{marginTop: 200}}>
                {    
                    this.props.threads.map(e => 
                        <div>{e.question}</div>
                    )
                }
            </div>
        )
	}
}

export default connect(state => ({
    threads: state.forum.threads
}))(Forum)