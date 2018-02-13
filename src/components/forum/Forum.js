import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { upvote, downvote } from './../../actions'

class Forum extends Component {

	constructor(props) {
        super(props)
    }
	render() {
        const {threads, dispatch} = this.props
        console.log(this.props)
        return (
            <div style={{
                marginTop: 200
            }}>
                {    
                    threads.map(({question, comments, votes, id}) => 
                        <Post 
                        question={question} 
                        comments={comments} 
                        votes={votes} 
                        upvote={() => dispatch(upvote(id))}
                        downvote={() => dispatch(downvote(id))}
                        />
                    )
                }
            </div>
        )
	}
}

export default connect(state => ({
    dispatch: state.dispatch,
    threads: state.forum.threads,
    votes: state.forum.votes
}))(Forum)
