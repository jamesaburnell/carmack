import React, { Component } from 'react'

export const Button = ({_click, children}) => (
    <div 
        className="btn btn-success"
        onClick={_click}
    >
        {children}
    </div>
)