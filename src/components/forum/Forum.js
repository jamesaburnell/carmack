import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { upvote, downvote } from './../../actions'
import { ForumContainer } from './styled'

const Forum = ({ threads, dispatch }) => 
    <ForumContainer>
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
    </ForumContainer>

export default connect(state => ({
    dispatch: state.dispatch,
    threads: state.forum.threads,
    votes: state.forum.votes
}))(Forum)
