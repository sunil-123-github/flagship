import React from 'react'
import { Navigation } from '../../AppNavigation/Navigation'
import { Link, Outlet } from 'react-router-dom'
import { List } from 'reactstrap'
import './../../../components/SideBar/SideBar.css'
import './../CoreServices/CoreServicesCSS/MainSection.css'
import './Production.css'
import { useLocation } from 'react-router-dom'
import { ProductionHomePage } from './ProductionHomePage'


export const Production = () => {

  const location = useLocation();
  const value = location.pathname === "/production";


  function Proc(value) {
    if (value) {
      return <ProductionHomePage />
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
      <div className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-2 mt-5'>
            <div className="sidebar p-1 position-fixed">
              <List type='unstyled' className='Menu'>
                <li className='mt-3'><Link className='NavMenu' to="task-distribution" style={location.pathname === '/production/task-distribution' ? activeLinkStyle : {}}><i className="bi bi-gear"></i> Task Distribution</Link></li>
                <li className='mt-3'><Link className='NavMenu' to="manufacture" style={location.pathname === '/production/manufacture' ? activeLinkStyle : {}}><i className="bi bi-hypnotize"></i> Manufacturing</Link></li>
                <li className='mt-3'><Link className='NavMenu' to="production-report" style={location.pathname === '/production/production-report' ? activeLinkStyle : {}}><i className="bi bi-gear-wide-connected"> </i> Report </Link></li>
              </List>
            </div>
          </div>
          <div className='col-8 mt-5 main-section'>
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
