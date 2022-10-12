import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
    // color:"green",
    
  };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                    <div className="container">
                      <NavLink className="navbar-brand fw-bold fs-3 h1" to='/'><span className='text-white'>M</span>y<span className='text-white'>Q</span>uiz</NavLink>

                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto me-5">
                    
                          <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="nav-link fw-bold text-white fs-5" to='/Home'>Home</NavLink>
                          <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }   className="nav-link fw-bold text-white fs-5" to='/statistics'>Statistics</NavLink>
                          <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }   className="nav-link fw-bold text-white fs-5" to='/blog'>Blog</NavLink>
                        </div>
                      </div>
                    </div>
            </nav>
        </>
    );
};

export default Header;