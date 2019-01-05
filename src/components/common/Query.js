import React, { Component } from 'react'
import axios from 'axios'
import { print } from 'graphql'
import { apiUrl as url } from './../../../config'

export class Query extends Component {
    constructor(props) {
        super(props)
        this._fetch = this._fetch.bind(this)
        this._mutate = this._mutate.bind(this)
        this.state = { 
            loading: true, 
            error: undefined,
            data: {} 
        }
    }

    componentDidMount() {
        !this.props.stopAutoload && this._fetch(this.props)
    }

    _mutate({ query, variables }) {
        console.log(variables, url)
        // axios.post(url, { 
        //     query: print(query), 
        //     variables 
        // }).then(({ data: { data } }) => {
        //     this.setState({loading: false, data})
        // }).catch(error => {
        //     this.setState({
        //         loading: false,
        //         error
        //     })
        //     console.error('ERROR: ', error)
        // })
        axios
            .post(url, {
                query: print(query),
                variables
            })
            .then(res => console.log(res))
            .catch(err => console.log('err: ', err))
    }

    _fetch({ query }) {
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
                {this.props.children({...this.props, ...this.state, mutate: this._mutate})}
            </div>
        )
    }
}
