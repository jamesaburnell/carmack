import React, { Component } from 'react'

export const BackButton = props => (
    <div 
        className="back-btn btn btn-primary"
        onClick={() => props.history.push(props.route)}
    >
        back
    </div>
)