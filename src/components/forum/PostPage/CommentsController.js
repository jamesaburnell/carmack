import React, { Component } from 'react'
import { connect } from 'react-redux'
import gql from "graphql-tag"
import { Query } from './../../common'
import { Comments_Styled, CommentWrapper_Styled } from './styled'
import Comment from './Comment'
import { addComment } from '../../../actions'

const ADD_COMMENT = gql`
    mutation CreateComment ($content: String!, $parent_id: ID!){
        createComment(
            content: $content
            parent_id: $parent_id
        ) {
            id
            content
            parent_id
            comments
        }
    }
`

class CommentsController extends Component {
    constructor(props) {
        super(props)
        this._addComment = this._addComment.bind(this)
    }

    _addComment(value, parentId) {
        const { selectedThread, dispatch } = this.props
        const updatedComments = this._updateComments(selectedThread.comments, parentId, value)
        dispatch(addComment(value, parentId, {
            ...selectedThread,
            comments: updatedComments
        }))
    }

    _updateComments(comments, parentId, value) {
        return comments.map(element => {
            if(element.id === parentId) {
                element = {
                    ...element,
                    comments: element.comments.concat({
                        comment: value, 
                        id: `${element.id}_child`, 
                        comments: []
                    })
                }
            }
            if(element.comments.length > 0){
                return {
                    ...element,
                    comments: this._updateComments(element.comments, parentId, value)
                }
            }
            return element
        })
    }

    _renderComments(comments){
        return (
            <Query stopAutoload={true}>
                {({ loading, error, data, mutate }) => {
                    return (
                    <Comments_Styled>
                        {comments.map(({id, comments, content}, i) => (
                            <CommentWrapper_Styled key={`id_${i}`}>
                                <Comment 
                                    _addComment={value => 
                                        mutate({
                                            query: ADD_COMMENT,
                                            variables: {
                                                "id": String(Math.round(Math.random() * 1000000)),
                                                "parent_id": id,
                                                "content": value
                                            }
                                        })
                                    }
                                >
                                    {content}
                                </Comment>
                                {comments && this._renderComments(comments)}
                            </CommentWrapper_Styled>
                        ))}
                    </Comments_Styled>
                )}}
            </Query>
        )
    }

    render() {
        return this._renderComments(this.props.selectedThread.comments)
    }
}

export default connect(state => ({
    selectedThread: state.forum.selectedThread
}))(CommentsController)