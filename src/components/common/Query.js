import React, { Component } from 'react'
import axios from 'axios'

export class Query extends Component {
    constructor(props) {
        super(props)
        this._fetch = this._fetch.bind(this)
        this.state = { 
            loading: true, 
            error: undefined,
            data: {} 
        }
    }

    componentDidMount() {
        this._fetch(this.props)
    }

    _fetch({ query, url }) {
        this.setState({ loading: true })
        axios({ 
            url,
            method: 'post',
            data: { query }
        }).then(({ data: { data } }) => {
            this.setState({loading: false, data})
        }).catch(error => {
            this.setState({
                loading: false,
                error
            })
            console.error(error)
        })
    }

    render() {
        return (
            <div>
                {this.props.children({...this.props, ...this.state})}
            </div>
        )
    }
}