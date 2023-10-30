import React from 'react'
import { Navigation } from '../../AppNavigation/Navigation'
import { Outlet, Link } from 'react-router-dom'
import { List } from 'reactstrap'
import './../../../components/SideBar/SideBar.css'
import './../CoreServices/CoreServicesCSS/MainSection.css'
import { useLocation } from 'react-router-dom'
import Payment from './Payment'
import './../ProjectMangement/PM.css';


export const ProjectMangement = () => {
  const location = useLocation();
  const value = location.pathname === "/projectmangement";

  function Proc(value) {
    if (value) {
      return <Payment/>
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
      <div className='container-fluid pm'>
        <div className='row'>
          <div className='col-2 mt-2'>
            <div className="sidebar p-1 position-fixed">
              <List type='unstyled' className='Menu'>             
                <li className='mt-3'><Link className='NavMenu' to="/projectmangement/performance" style={location.pathname === '/projectmangement/performance' ? activeLinkStyle : {}}><i className="bi bi-bar-chart-fill"></i> Deliver Order</Link></li>
              </List>
            </div>
          </div>
          <div className='col-8 mt-2 main-section'>
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