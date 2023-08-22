import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Machine from './machine.avif'
import './LandingPage.css'
import { useState } from 'react'

export const LandingPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [Err, setErr] = useState(false);

  const handleSubmit = (e) => {
    if (inputValue === "sunil" && inputPassword === "123") {
    }
    else {
      e.preventDefault();
      setErr(true);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row Main-section">
          <div className="col-4 Container">
            <div className='d-flex brand Content mt-1'>
              <img src={Machine} alt="Machine" className=' brand-logo' />
            </div>
          </div>
          <div className="col-8 Container">
            <div className='Content '>
              <h1 className='brand-name'>Flagship</h1>
              <h5 className='brand-vision'>To be Earth's most customer-centric company, where customers can find and discover
                anything & everything they might want to buy online, and endeavors to offer our customers
                the lowest possible prices.</h5>
            </div>
            <div className='mt-4'>
              <div className="loginbox p-4">
                <form action="submit">
                  <input type="text" id="myInput" className='input-field' value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} placeholder="Enter username or email" /> <br /><br />            
                  <input type="password" id="myInput" className='input-field' placeholder="Password" value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)} />
                  {Err ? <p className='text-danger fw-bold mb-0'>Incorrect Credentials</p> : null}
                  <Link to="/coreservices"><button className="btn login-btn btn-danger btn-lg mt-3" onClick={handleSubmit}>Log In</button></Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
