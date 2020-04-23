import React from "react";
import "./Navbar.css";

const Nav = (props) => (
    <nav classname="navbar bg-dark">
        <div className="row">
            <div className="col-md-4">
                <a className="navbar-brand" href="/">
                    Clicky Game
                </a>
            </div>
            <div classname="col-md-4">
                <h4 className="nav-message">{props.message}</h4>
            </div>
            <div className="col-md-4">
                <h4 className="nav-score">Current: {props.currentScore} | Top: {props.topScore}</h4>

            </div>
        </div>
    </nav>
);

export default Nav;