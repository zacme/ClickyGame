import React from "react";
import "./Navbar.css";

const Nav = (props) => (
    <nav classname= "navbar" expand="lg" bg="dark">
        <a className="navbar-brand" href="/">
            Clicky Game
        </a>
        <h4 className="nav-message">{props.message}</h4>
        <h4 className="nav-score">Current: {props.currentScore} | Top: {props.topScore}</h4>
    </nav>
);

export default Nav;