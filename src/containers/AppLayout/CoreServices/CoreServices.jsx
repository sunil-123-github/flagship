import React from 'react'
import { Navigation } from '../../AppNavigation/Navigation'
import { Outlet, Link } from 'react-router-dom'
import { List } from 'reactstrap'
import './../../../components/SideBar/SideBar.css'
import './CoreServicesCSS/MainSection.css'
import { CoreServicesBox } from './CoreServicesBox'
import { useLocation } from 'react-router-dom'


export const CoreServices = () => {
  const NavMenuService = {
    Desiging: "Get Quotation",
    Manufacturing: "Quotation",
    Installation: "Your Orders",
    Maintenance: "Track Your Order",
  }

  const location = useLocation();
  const value = location.pathname === "/coreservices";

  function core_s_box(value) {
    if (value) {
      return <CoreServicesBox />
    }
    else {
      null
    }
  }

  function core_s_heading(value) {
    if (value) {
      return <div>
        <h1 className='text-heading'><b>CORE SERVICES</b></h1>
        <div className="about-compony mt-2">
          <h5 className='about-compony-text'>The mechanical company offers design,
           manufacturing, and maintenance services for mechanical components and systems. 
           This Single Page Web Application built in React JS . This Web app uses letest
            Redux toolkit library for State Manegement and React Router Dom v6 for Routing 
            Solution. Our moto behind this App making is to Build a Useful Software for small 
            scale enterprise.</h5>
        </div>
      </div>
    }
    else {
      null
    }
  }

  const activeLinkStyle = {
    color: '#007bff',
  };

  return (
    <div>
      <div className='container-fluid fixed-top'>
        <Navigation />
      </div>
      <div className='container-fluid'>
        <div className='row feed'>
          <div className='col-2 mt-3'>
            <div className="sidebar p-1 position-fixed">
              <List type='unstyled' className='Menu'>
                <li className='mt-3 '><Link className='NavMenu' to="/coreservices/get-quotation" style={location.pathname === '/coreservices/get-quotation' ? activeLinkStyle : {}}>
                  <i class="bi bi-file-earmark-medical"></i> {NavMenuService.Desiging}</Link></li>
                <li className='mt-3 '><Link className='NavMenu' to="/coreservices/quotation" style={location.pathname === '/coreservices/quotation' ? activeLinkStyle : {}}><i className="bi bi-hypnotize"></i> {NavMenuService.Manufacturing}</Link></li>
                <li className='mt-3 '><Link className='NavMenu' to="/coreservices/your-orders" style={location.pathname === '/coreservices/your-orders' ? activeLinkStyle : {}}><i className="bi bi-gear-wide-connected"> </i>{NavMenuService.Installation} </Link></li>
                <li className='mt-3 '><Link className='NavMenu' to="/coreservices/track-your-order" style={location.pathname === '/coreservices/track-your-order' ? activeLinkStyle : {}}><i className="bi bi-file-bar-graph"></i> {NavMenuService.Maintenance}</Link></li>
              </List>
            </div>
          </div>
          <div className='col-8 mt-3 main-section'>
            <div>{core_s_heading(value)}</div>
            <div className='mt-4'>{core_s_box(value)}</div>
            <div className="features">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
