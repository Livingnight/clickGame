import React from 'react'
import './header.css'
const Header = props => (
    <div>
    <nav className="navbar navbar-expand-lg">
        <div className='container-fluid'>
        <div className='row'>

        <div className="collapse navbar-collapse col-sm-4" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                </li>

            </ul>
        </div>
        <h2 className='message col-sm-4'>{props.message}</h2>
            <h2 className='scores col-sm-4'>Score: {props.score} | High Score: {props.highScore}</h2>

        </div>
        </div>
    </nav>

    </div>
    );


export default Header;
