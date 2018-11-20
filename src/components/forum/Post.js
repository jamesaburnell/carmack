import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    PostContainer, 
    VoteNumContainer, 
    VoteActionContainer, 
    VoteAction, 
    QuestionContainer, 
    Question,
    QuestionInfo 
} from './styled'

const Post = ({
    upvote, 
    downvote, 
    question, 
    comments,
    addedBy,
    // votes,
    _handlePostSelect
}) => (
    <PostContainer className="col-md-12 col-md-offset-2 col-lg-12 col-lg-offset-2">
        
        {/* <VoteNumContainer>
            {votes}
        </VoteNumContainer>
       
       <VoteActionContainer>
            <VoteAction onClick={upvote}>
                upvote
            </VoteAction>
            <VoteAction onClick={downvote}>
                downvote
            </VoteAction>
        </VoteActionContainer> */}
        <QuestionContainer>
            <Question 
                onClick={_handlePostSelect}
            >
                {question}
            </Question>
            <QuestionInfo>
                <div>comments: {comments.length}</div>
                <div>added by: {addedBy}</div>
            </QuestionInfo>
        </QuestionContainer>

    </PostContainer>
)

export default Post