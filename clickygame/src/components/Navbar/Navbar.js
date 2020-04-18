import React from "react";

const Nav = (props) => (
    <nav classname= "navbar navbar-expand-lg bg-primary">
        <a className="navbar-brand" href="/">
            Clicky Game
        </a>
        <h4 className="nav-message">{props.message}</h4>
        <h4 className="nav-score">Current: {props.currentScore} | Top: {props.topScore}</h4>
    </nav>
);

export default Nav;