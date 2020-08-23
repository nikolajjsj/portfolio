import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style = {
    padding: "45px"
}

export default class Header extends Component {
    render() {
        return (
            <nav className="nav nav-pills justify-content-end" style={style}>
                <li className="nav-item">
                    <Link class="nav-link active bg-danger" to="/contact">Contact</Link>
                </li>
            </nav>
        )
    }
}