import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { RegisterForm, FormSection } from './styled'

const RegisterStep1 = ({
    _updateInformation,
    _next
}) => 
    <div>
        <RegisterForm>
            <FormSection className="form-group">
                <label>email</label>
                <input type="text" 
                    onChange={e => _updateInformation({type: 'email', value: e.target.value})}
                />
            </FormSection>
            <FormSection className="form-group">
                <label>password</label>
                <input type="password" 
                    onChange={e => _updateInformation({type: 'password', value: e.target.value})}
                />
            </FormSection>
            <FormSection className="form-group">
                <label>confirm password</label>
                <input type="password"
                    onChange={e => _updateInformation({type: 'passwordConf', value: e.target.value})}
                />
            </FormSection>
        </RegisterForm>
        <div 
        className="btn btn-default"
        onClick={_next}
        >
            Next
        </div>
    </div>

export default RegisterStep1