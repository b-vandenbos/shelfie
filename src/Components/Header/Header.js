import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./header.css"

export default class Header extends Component {

render() {
    return (
        <div className='header'>
        <img src="/logo.png" alt="logo" />
            <h1>Shelfie</h1>
            <div className="navbar">
                <Link to={'/'}><button className="nav-button">Dashboard</button></Link>
                <Link to={'/add'}><button className="nav-button">Add Inventory</button></Link>
            </div>
        
        </div>
    )
}

}