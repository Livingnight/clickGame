import React from 'react'
import './header.css'
const Header = props => (
    <div>
    <nav className="navbar navbar-expand-lg">


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                </li>
                <li>Score: {props.score} | High Score: {props.highScore}</li>
                <li>{props.message}</li>
            </ul>
        </div>
    </nav>
    </div>
    );


export default Header;
