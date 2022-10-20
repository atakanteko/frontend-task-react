import Logo from "../../favicon.svg";
import React from 'react'

function Header(){
    return(
        <nav className="navbar bg-primary px-2 px-lg-5">
            <div className="py-2">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    <span className="text-white fw-bold">Tarfin Frontend Task</span>
                </a>
            </div>
        </nav>
    )
}

export default Header;