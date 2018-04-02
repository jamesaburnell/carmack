import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Comments_Styled, 
    CommentWrapper_Styled
} from './styled'
import Comment from './Comment'
import { addComment } from '../../../actions'

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
            <Comments_Styled>
                {comments.map(({id, comments, comment}, i) => (
                    <CommentWrapper_Styled key={`id_${i}`}>
                        <Comment _addComment={value => this._addComment(value, id)}>
                            {comment}
                        </Comment>
                        {comments && this._renderComments(comments)}
                    </CommentWrapper_Styled>
                ))}
            </Comments_Styled>
        )
    }

    render() {
        return this._renderComments(this.props.selectedThread.comments)
    }
}

export default connect(state => ({
    selectedThread: state.forum.selectedThread
}))(CommentsController)