import styled from 'styled-components'

export const Cursor = styled.div`
    cursor: pointer;
`

export const AppContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const HeaderLogoMain = styled.div`
    font-size: 29px;
    margin-right: 50px;
`

export const LoginForm = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 140px;
`

export const LoginError = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: baseline;
    color: red;
`

export const LoginFormSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: baseline;
`

export const TextArea = styled.textarea`
    width: 100%;
    border: solid 1px #d8eadd;
`