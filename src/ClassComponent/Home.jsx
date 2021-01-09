import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Welcome to Apple Store</h1>
                <Link to="/"></Link>
                <Link to="/shop">Shop Store</Link> |
                <Link to="/cart" > Cart items</Link>
            </div>
        )
    }
}