import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'

export const Navigation = () => {
    
    
    return (
        <div className='p-0 m-0 '>
            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="container-fluid">
                    <Link to="/" className='navbar-brand'>Flagship</Link>
                    <nav className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/coreservices" className='nav-link active fw-bold'  activeClassName="activ"  >Core Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/procurement" className='nav-link active fw-bold '>Procurement</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/production" className='nav-link active fw-bold'>Production</Link>
                            </li>
                          
                            <li className="nav-item">
                                <Link to="/projectmangement" className='nav-link active fw-bold'
                                 >Project Manegement</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="righ-nav justify-content-end">
                        <div className="dropdown">
                          
                            <i className="bi bi-grid-3x3-gap-fill"></i>
                            <div className="dropdown-content">
                               <Link to="/flagship-documentation">Documentation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}




