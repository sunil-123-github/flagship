import React from 'react'
import { Navigation } from '../../AppNavigation/Navigation'
import { Link, Outlet } from 'react-router-dom'
import { List } from 'reactstrap'
import './../../../components/SideBar/SideBar.css'
import './../CoreServices/CoreServicesCSS/MainSection.css'
import './Procure.css'
import { useLocation } from 'react-router-dom'
import { Pr } from './Pr'

export const Procurement = () => {

  const location = useLocation();
  const value = location.pathname === "/procurement";

  function Proc(value) {
    if (value) {
      return <Pr />
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
                <li className='mt-3'><Link className='NavMenu' to="/procurement/purchase-materials" style={location.pathname === '/procurement/purchase-materials' ? activeLinkStyle : {}}>
                  <i class="bi bi-bookmark-check" ></i> Purchase Material</Link></li>
                <li className='mt-3'><Link className='NavMenu' to="/procurement/workforce" style={location.pathname === '/procurement/workforce' ? activeLinkStyle : {}}><i class="bi bi-people-fill" ></i> Workforce </Link></li>
                <li className='mt-3'><Link className='NavMenu' to="/procurement/dashboard" style={location.pathname === '/procurement/dashboard' ? activeLinkStyle : {}}><i class="bi bi-browser-edge"></i> Dashboard</Link></li>

              </List>
            </div>
          </div>
          <div className='col-8 mt-3 main-section'>
            <div>{Proc(value)}</div>
            <div className="features">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
