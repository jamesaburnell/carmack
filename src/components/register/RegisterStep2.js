import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { RegisterForm, RegisterStep2Styled } from './styled'

const RegisterStep2 = ({
    _next, 
    _updateInformation,
    _onToken
}) => (
    <RegisterForm>
        <RegisterStep2Styled>
        <StripeCheckout  token={_onToken} stripeKey={'pk_test_7xTTPEwHnnaMTMQvlptr8kco'} />
        <div className="btn btn-default" onClick={_next}>
            Next
        </div>
        </RegisterStep2Styled>
    </RegisterForm>
)

export default RegisterStep2