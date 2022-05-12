import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const NavBar = () => {

    return (
        <div className="ui secondary menu">
            <Link className="item" to='/'>Twitcher</Link>
            <Link className="item" to='/streams/new'>New</Link>
            <Link className="item" to='/'>Streams</Link>
            <div className="right menu">
                <Link className="ui item" to='/'>Logout</Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default NavBar;