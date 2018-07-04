import styled from 'styled-components'

export const PostPageContainer_Styled = styled.div`
    margin-top: 150px;
    color: ${p => p.active ? 'blue' : 'green'}
`

export const PostPageQuestion_Styled = styled.h1`
    padding-top: 30px;
    padding-bottom: 30px;
`

export const Comments_Styled = styled.ul`
    list-style: none;
`

export const CommentWrapper_Styled = styled.li`
    border-bottom: 1px solid #eee;
    border-left: 1px solid #eee;
    padding: 10px 0px 10px 10px;
`

export const CommentContainer_Styled = styled.div`
    ${'' /* border-bottom: 1px solid #eee;
    border-left: 1px solid #eee; */}
    padding: 10px;
`