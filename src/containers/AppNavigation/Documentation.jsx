import React from "react";
import { Navigation } from "./Navigation";
import './Navigation.css'

export const Documentation = () => {

    return (
        <div>
            <div className='container-fluid fixed-top'>
                <Navigation />
            </div>
            <div className='container-fluid mt-2'>
                <div className="row doc">
                    <div className="col documentation">
                        <h5 className="p-1 fw-bold pt-3">WHY FLAGSHIP ?</h5>
                        <hr />
                        <p className="fw-bold">Flagship is a Single Page Application using <span className="react-js"> React JS - ( Predominant FrontEnd Library Of Modern Time ).</span>
                        </p>
                        <p>Our Moto Behind this App is Make a Single Page Application For a Small Scale Mechanical Enterprise , Where Customer can Manage their Daily business operations.</p>
                        <h6>Key Features Of Flagship App</h6>
                        <ul><li>Creation Of Quotation using Customer's Details</li>
                        <li>Order Tracking System</li>
                        <li>Raw Material Purchasing System</li>
                        <li>Work Force Management</li>
                        <li>Dashobard Of Emplyoees & Raw Materials</li>
                        <li>Project Management System</li>
                        </ul>
                        <h6>TECHNOLOGY STACK</h6>
                       <ul>
                        <li>React JS</li>
                        <li>Boostrap - 5</li>
                        <li>React Router Dom v6</li>
                        <li>Redux Toolkit</li>
                        <li>Github Pages For Deployment</li>
                       </ul>                    
                    </div>
                </div>
            </div>
        </div>
    )
}