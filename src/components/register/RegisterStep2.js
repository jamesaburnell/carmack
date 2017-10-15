import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const RegisterStep2 = ({
    _next, 
    _updateInformation,
    _onToken
}) => 
    <div className="register-form register-step2">
       
       <StripeCheckout 
            token={_onToken}
            stripeKey={'pk_test_7xTTPEwHnnaMTMQvlptr8kco'}
       />

        <div 
        className="btn btn-default"
        onClick={_next}
        >
            Next
        </div>
    </div>

export default RegisterStep2