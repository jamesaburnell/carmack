import React from 'react'

const RegisterStep1 = ({
    _updateInformation,
    _next
}) => 
    <div>
        <div className="sign-in-form">
            <label>
                email
                <input 
                type="text" 
                onChange={e => _updateInformation({type: 'email', value: e.target.value})}
                />
            </label>
            <label>
                password
                <input 
                type="password" 
                onChange={e => _updateInformation({type: 'password', value: e.target.value})}
                />
            </label>
            <label>
                confirm password
                <input 
                type="password"
                onChange={e => _updateInformation({type: 'passwordConf', value: e.target.value})}
                />
            </label>
        </div>

        <div 
        className="btn btn-default"
        onClick={_next}
        >
            Next
        </div>
    </div>

export default RegisterStep1