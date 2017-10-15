import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import './register.scss'

const RegisterStep1 = ({
    _updateInformation,
    _next,
    _onToken
}) => 
    <div>
        <div className="register-form">
            
            <div className="form-group form-section">
                <label>email</label>
                <input
                type="text" 
                onChange={e => _updateInformation({type: 'email', value: e.target.value})}
                />
            </div>
            
            <div className="form-group form-section">
                <label>password</label>
                <input 
                type="password" 
                onChange={e => _updateInformation({type: 'password', value: e.target.value})}
                />
            </div>
            
            <div className="form-group form-section">
                <label>confirm password</label>
                <input 
                type="password"
                onChange={e => _updateInformation({type: 'passwordConf', value: e.target.value})}
                />
            </div>

        </div>

        <div 
        className="btn btn-default"
        onClick={_next}
        >
            Next
        </div>
        
    </div>

export default RegisterStep1