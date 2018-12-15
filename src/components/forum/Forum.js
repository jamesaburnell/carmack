import React from 'react'
import { connect } from 'react-redux'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Post from './Post'
import { upvote, downvote, selectThread } from './../../actions'
import { ForumContainer } from './styled'

const Forum = ({ dispatch, history }) => 
    <Query
        query={gql`
            {
                threads {
                    id
                    created_by_id
                    subject
                    upvotes
                    downvotes
                    comments {
                        id
                        created_by_id
                        content
                        comments {
                            id
                            created_by_id
                            content
                            comments {
                                id
                                created_by_id
                                content
                                comments {
                                    id
                                    created_by_id
                                    content
                                }
                            }
                        }
                    }
                }
            }
        `}
    >
        {({ loading, error, data: { threads } }) => {
            if(loading) {
                return (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div class="spinner">
                            <div class="rect1"></div>
                            <div class="rect2"></div>
                            <div class="rect3"></div>
                            <div class="rect4"></div>
                            <div class="rect5"></div>
                        </div>
                    </div>
                )
            }
            if (error) return <p>Error :(</p>
            return (
                <ForumContainer className="container">
                    {    
                        threads.map(thread => 
                            <Post 
                                question={thread.subject} 
                                comments={thread.comments} 
                                votes={thread.votes} 
                                upvote={() => dispatch(upvote(thread.id))}
                                downvote={() => dispatch(downvote(thread.id))}
                                _handlePostSelect={() => {
                                    dispatch(selectThread(thread))
                                    history.push('/post')
                                }}
                                key={thread.id}
                            />
                        )
                    }
                </ForumContainer>
            )
        }}
    </Query>

export default connect(state => ({
    threads: state.forum.threads,
    votes: state.forum.votes
}))(Forum)