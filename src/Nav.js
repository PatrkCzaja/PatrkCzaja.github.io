import React from "react";
import { Link } from "react-router-dom"



 function Nav() {
    return ( 
    <nav className="nav">
        <ul className="nav-links">
            <Link to="/">
                <li> O nas </li>
            </Link>
            <Link>
                <li to="/offer"> Oferta </li>
            </Link>
        </ul>
    </nav>
    );
}

export default Nav;