import React from 'react'
import { Navigation } from '../../AppNavigation/Navigation'
import { Outlet, Link } from 'react-router-dom'
import { List } from 'reactstrap'
import './../../../components/SideBar/SideBar.css'
import './../CoreServices/CoreServicesCSS/MainSection.css'

export const Sales = () => {
  const NavMenuService = {
    Desiging: "Designing Component",
    Manufacturing: "Manufacturing engines",
    Installation: "Installing Pumps",
    Maintenance: "Maintenance Of Machinery",
  }
  return (
    <div>
      <div className='container-fluid'>
        <Navigation />
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3 mt-3'>
            <div className="sidebar p-1">
              <List type='unstyled' className='Menu'>
                <li className='mt-3'><Link className='NavMenu' to="/Sales/Desiging"><i className="bi bi-gear"></i> {NavMenuService.Desiging}</Link></li>
                <li className='mt-3'><Link className='NavMenu' to="/Sales/Manufacturing"><i className="bi bi-hypnotize"></i> {NavMenuService.Manufacturing}</Link></li>
                <li className='mt-3'><Link className='NavMenu' to="/Sales/Installing"><i className="bi bi-gear-wide-connected"> </i>{NavMenuService.Installation} </Link></li>
                <li className='mt-3'><Link className='NavMenu' to="/Sales/Maintenance"><i className="bi bi-file-bar-graph"></i> {NavMenuService.Maintenance}</Link></li>
                <li className='mt-3'><Link className='NavMenu' to="/Sales/Desiging"><i className="bi bi-gear"></i> {NavMenuService.Desiging}</Link></li>
                <li className='mt-3'><Link className='NavMenu' to="/Sales/Manufacturing"><i className="bi bi-hypnotize"></i> {NavMenuService.Manufacturing}</Link></li>
                <li className='mt-3'><Link className='NavMenu' to="/Sales/Installing"><i className="bi bi-gear-wide-connected"> </i>{NavMenuService.Installation} </Link></li>
                <li className='mt-3'><Link className='NavMenu' to="/Sales/Maintenance"><i className="bi bi-file-bar-graph"></i> {NavMenuService.Maintenance}</Link></li>
              </List>
            </div>
          </div>
          <div className='col-8 mt-3 main-section'>
            <h1 className='text-warning'>Sales & Marketing</h1>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}