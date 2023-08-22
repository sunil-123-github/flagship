import React from 'react'
import { Link } from 'react-router-dom';
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
                                <Link to="/coreservices" className='nav-link active fw-bold'>Core Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Procurement" className='nav-link active fw-bold '>Procurement</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Production" className='nav-link active fw-bold'>Production</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/Sales" className='nav-link active fw-bold'>Sales & Marketing</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/ProjectMangement" className='nav-link active fw-bold'>Project Manegement</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="righ-nav justify-content-end">
                        <div class="dropdown">
                            {/* <button class="dropbtn">Dropdown</button> */}
                            <i class="bi bi-grid-3x3-gap-fill"></i>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}




