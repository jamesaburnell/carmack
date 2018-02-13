import React, { Component } from 'react'

const Post = ({
    upvote, 
    downvote, 
    question, 
    comments,
    addedBy,
    votes
}) => 
    <div className="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2" style={{
        border: 'solid 1px #000', 
        padding: '20px 35px', 
        margin: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }}>
        <div style={{
            fontSize: '25px',
            textAlign: 'center'
        }}>
            {votes}
        </div>
        <div style={{
            width: '15%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        }}>
            <div 
            onClick={upvote}
            style={{
                textDecoration: 'underline', 
                cursor: 'pointer'
            }}>
                upvote
            </div>
            <div 
            onClick={downvote}
            style={{
                textDecoration: 'underline', 
                cursor: 'pointer'
            }}>
                downvote
            </div>
        </div>
        <div style={{
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        }}>
            <div style={{
                cursor: 'pointer',
                fontSize: '30px'
            }}>
                {question}
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div>comments: {comments.length}</div>
                <div>added by: {addedBy}</div>
            </div>
        </div>
    </div>

export default Post