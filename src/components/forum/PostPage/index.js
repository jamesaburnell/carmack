import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PostPageContainer_Styled, PostPageQuestion_Styled } from './styled'
import CommentsController from './CommentsController'
import Comment from './Comment'
import { BackButton } from '../../common'
import { addComment } from '../../../actions'

class PostPage extends Component {

	constructor(props) {
        super(props)
        this._addComment = this._addComment.bind(this)
    }

    _addComment(value) {
        const {dispatch, selectedThread} = this.props
        dispatch(addComment('question', value, {
            ...selectedThread,
            comments: selectedThread.comments.concat({
                comment: value, 
                id: `${selectedThread.id}_child`, 
                comments: []
            })
        }))
    }

	render() {
        const { selectedThread, history } = this.props
        return (
            <PostPageContainer_Styled active={true} className="container">
                <BackButton history={history} route={"/forum"} />
                <PostPageQuestion_Styled>
                    <Comment>
                        {selectedThread.subject}
                    </Comment>
                </PostPageQuestion_Styled>
                <CommentsController />
            </PostPageContainer_Styled>
        )
    }
}

export default connect(state => ({
    selectedThread: state.forum.selectedThread
}))(PostPage)