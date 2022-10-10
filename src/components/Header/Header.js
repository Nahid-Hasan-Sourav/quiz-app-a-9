import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                      <NavLink className="navbar-brand" >Navbar</NavLink>

                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto me-5">
                    
                          <NavLink className="nav-link fw-bold" to='/'>Topics</NavLink>
                          <NavLink className="nav-link fw-bold" to='statistics'>Statistics</NavLink>
                          <NavLink className="nav-link fw-bold" to='blog'>Blog</NavLink>
                        </div>
                      </div>
                    </div>
            </nav>
        </>
    );
};

export default Header;