import React, { Component } from 'react'
import { CommentContainer_Styled } from './styled'
import { TextArea } from '../../commonStyled'
import { Button } from '../../common'


export default class Comment extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            showCommentTextArea: false,
            newComment: ''
        }
        this._handleAddComment = this._handleAddComment.bind(this)
        this._closeTextArea = this._closeTextArea.bind(this)
        this._openTextArea = this._openTextArea.bind(this)
        this._handleTextInput = this._handleTextInput.bind(this)
    }

    _handleTextInput(e) {
        this.setState({newComment: e.target.value})
    }

    _handleAddComment() {
        console.log('COMMENT PROPS: ', this.props)
        if(this.state.newComment.length > 0) {
            this.props._addComment(this.state.newComment)
            this._closeTextArea()
        }
    }

    _openTextArea(){
        this.setState({showCommentTextArea: true})
    }

    _closeTextArea() {
        this.setState({showCommentTextArea: false})
    }

    render() {
        const { children } = this.props
        const { showCommentTextArea } = this.state
        return (
            <CommentContainer_Styled>
                {children}
                <div>
                    {!showCommentTextArea && <Button _click={this._openTextArea}>+</Button>}
                </div>
                {showCommentTextArea && 
                <div>
                    <TextArea onChange={this._handleTextInput} />
                    <Button _click={this._handleAddComment}>+</Button>
                    <Button _click={this._closeTextArea}>x</Button>
                </div>}
            </CommentContainer_Styled>
        )
    }

}