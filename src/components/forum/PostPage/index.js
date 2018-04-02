import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    PostPageContainer_Styled, 
    PostPageQuestion_Styled
} from './styled'
import { BackButton } from '../../common'
import CommentsController from './CommentsController'
import Comment from './Comment'
import { addComment } from '../../../actions'

class PostPage extends Component {

	constructor(props) {
        super(props)
        this._addComment = this._addComment.bind(this)
    }

    _addComment(value){
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
        const {selectedThread, history} = this.props
        return (
            <PostPageContainer_Styled className="container">

                <BackButton history={history} route={"/forum"} />
                
                <PostPageQuestion_Styled>
                    <Comment _addComment={this._addComment}>
                        {selectedThread.question}
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
