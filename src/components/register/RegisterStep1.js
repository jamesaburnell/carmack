import React from 'react'
import { RegisterForm, FormSection } from './styled'

const RegisterStep1 = ({
    _updateInformation,
    _submit
}) => 
    <div>
        <RegisterForm>
            <FormSection className="form-group">
                <label>Email*</label>
                <input type="text" 
                    onChange={e => _updateInformation({type: 'email', value: e.target.value})}
                />
            </FormSection>
            <FormSection className="form-group">
                <label>Password*</label>
                <input type="password" 
                    onChange={e => _updateInformation({type: 'password', value: e.target.value})}
                />
            </FormSection>
            <FormSection className="form-group">
                <label>Confirm Password*</label>
                <input type="password"
                    onChange={e => _updateInformation({type: 'passwordConf', value: e.target.value})}
                />
            </FormSection>
            <FormSection className="form-group">
                <label>Preferred DAW</label>
                <input type="text"
                    onChange={e => _updateInformation({type: 'daw', value: e.target.value})}
                />
            </FormSection>
            <FormSection className="form-group">
                <label>Soundcloud Profile</label>
                <input type="text"
                    onChange={e => _updateInformation({type: 'soundcloud', value: e.target.value})}
                />
            </FormSection>
            <FormSection className="form-group">
                <label>Website</label>
                <input type="text"
                    onChange={e => _updateInformation({type: 'website', value: e.target.value})}
                />
            </FormSection>
        </RegisterForm>
        <div 
        className="btn btn-default"
        onClick={_submit}
        >
            Submit
        </div>
    </div>

export default RegisterStep1