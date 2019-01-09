import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { upvote, downvote, selectThread } from './../../actions'
import { ForumContainer } from './styled'
import { Query } from './../common'
import { checkLoginStatus } from '../../helpers/util';
import api from '../../api';

let QUERY = `
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
`
const Forum = ({ dispatch, history, auth }) => {
    // checkLoginStatus({history, auth})
    return (
        <Query query={QUERY} url={'http://localhost:8000/graphql'}>
            {({ loading, error, data }) => {
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
                            <div className="spinner">
                                <div className="rect1"></div>
                                <div className="rect2"></div>
                                <div className="rect3"></div>
                                <div className="rect4"></div>
                                <div className="rect5"></div>
                            </div>
                        </div>
                    )
                }
                if (error) return <p>Error :(</p>
                return (
                    <ForumContainer className="container">
                        {    
                            data.threads.map(thread => 
                                <Post 
                                    question={thread.subject} 
                                    comments={thread.comments} 
                                    votes={thread.votes} 
                                    upvote={() => console.log('upvote: ', thread.id)}
                                    downvote={() => console.log('downvote: ', thread.id)}
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
    )
    
}
export default connect(state => ({
    auth: state.authReducer,
    votes: state.forum.votes
}))(Forum)