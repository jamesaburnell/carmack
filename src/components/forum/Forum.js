import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { upvote, downvote, selectThread } from './../../actions'
import { ForumContainer } from './styled'

const Forum = ({ threads, dispatch, history }) => 
    <ForumContainer className="container">
        {    
            threads.map(thread => 
                <Post 
                question={thread.question} 
                comments={thread.comments} 
                votes={thread.votes} 
                upvote={() => dispatch(upvote(thread.id))}
                downvote={() => dispatch(downvote(thread.id))}
                _handlePostSelect={() => {
                    dispatch(selectThread(thread))
                    history.push('/post')
                }}
                />
            )
        }
    </ForumContainer>

export default connect(state => ({
    threads: state.forum.threads,
    votes: state.forum.votes
}))(Forum)
