import React from 'react'

import "./NavbarComponent.css";

const NavbarComponent = () => {

  return (
   <>
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transaprent">
            <div className="container">

                <a className="navbar-brand" href="h">Ali </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="ul_list navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="h">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#About">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skill">skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Education">education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Portfolio">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Footer">contact</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    </header>

   </>
  )
}

export default NavbarComponent;