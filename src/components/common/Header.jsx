import React from 'react'
import {Link} from "react-router-dom";
import Logo from "../../favicon.svg";

function Header(){
    return(
        <nav className="navbar bg-primary px-2 px-lg-5 mb-2">
            <div className="py-2">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    <span className="text-white fw-bold">Tarfin Frontend Task</span>
                </Link>
            </div>
        </nav>
    )
}

export default Header;