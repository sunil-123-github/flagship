import React from 'react'
import './Procure.css'
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {  TopManegement } from '../../../redux-store/Slices/Team';
import { MachineOperators } from '../../../redux-store/Slices/Team';

export const Purchase = () => {

  const [Engineer, setEngineer] = useState('');
  const [Supervisor, setSupervisor] = useState('');

  const dispatch = useDispatch();

  // console.log(`Eng is ${Engineer}`)
  // console.log(`Suprvsr is ${Supervisor}`)

  let Operators = [];
  // Step 1: Create a ref to the DOM element you want to remove
  const elementAnkit = useRef(null);
  const handleRemoveAnkit = () => {
    // Step 3: Use DOM methods to remove the element
    if (elementAnkit.current) {
      elementAnkit.current.remove();
    }
  };
  function AddAnkit() {
    let ankit = {
      name: "Ankit Agrawal",
      city: "Jaipur, Rajsthan",
    }
    Operators.push(ankit);
  }

  // Step 1: Create a ref to the DOM element you want to remove
  const elementHitesh = useRef(null);
  const handleRemoveHitesh = () => {
    // Step 3: Use DOM methods to remove the element
    if (elementHitesh.current) {
      elementHitesh.current.remove();
    }
  };
  function AddHitesh() {
    let Hitesh = {
      name: "Hitesh Choudhari",
      city: "AJmer, Rajsthan",
    }
    Operators.push(Hitesh);
  }
  // Step 1: Create a ref to the DOM element you want to remove
  const elementGaurav = useRef(null);
  const handleRemoveGaurav = () => {
    // Step 3: Use DOM methods to remove the element
    if (elementGaurav.current) {
      elementGaurav.current.remove();
    }
  };
  function AddGaurav() {
    let Gaurav = {
      name: "Gaurav Choudhari",
      city: "Bikaner, Rajsthan",
    }
    Operators.push(Gaurav);
  }
  // Step 1: Create a ref to the DOM element you want to remove
  const elementSachin = useRef(null);
  const handleRemoveSachin = () => {
    // Step 3: Use DOM methods to remove the element
    if (elementSachin.current) {
      elementSachin.current.remove();
    }
  };
  function AddSachin() {
    let Sachin = {
      name: "Sachin Rathore",
      city: "Jodhpur, Rajsthan",
    }
    Operators.push(Sachin);
  }
  // Step 1: Create a ref to the DOM element you want to remove
  const elementPratik = useRef(null);
  const handleRemovePratik = () => {
    // Step 3: Use DOM methods to remove the element
    if (elementPratik.current) {
      elementPratik.current.remove();
    }
  };
  function AddPratik() {
    let Pratik = {
      name: "Pratik Singh",
      city: "Ahmadabad, Gujrat",
    }
    Operators.push(Pratik);
  }
  // Step 1: Create a ref to the DOM element you want to remove
  const elementRitesh = useRef(null);
  const handleRemoveRitesh = () => {
    // Step 3: Use DOM methods to remove the element
    if (elementRitesh.current) {
      elementRitesh.current.remove();
    }
  };
  function AddRitesh() {
    let Ritesh = {
      name: "Ritesh Patel",
      city: "Surat, Gujrat",
    }
    Operators.push(Ritesh);
  }
  // Step 1: Create a ref to the DOM element you want to remove
  const elementVihan = useRef(null);
  const handleRemoveVihan = () => {
    // Step 3: Use DOM methods to remove the element
    if (elementVihan.current) {
      elementVihan.current.remove();
    }
  };
  function AddVihan() {
    let Vihan = {
      name: "Vihan Patel",
      city: "Rajkot, Gujrat",
    }
    Operators.push(Vihan);
  }
  // Step 1: Create a ref to the DOM element you want to remove
  const elementBhupesh = useRef(null);
  const handleRemoveBhupesh = () => {
    // Step 3: Use DOM methods to remove the element
    if (elementBhupesh.current) {
      elementBhupesh.current.remove();
    }
  };
  function AddBhupesh() {
    let Bhupesh = {
      name: "Bhupesh Patel",
      city: "Indore, Madhya Pradesh",
    }
    Operators.push(Bhupesh);
  }
  // Step 1: Create a ref to the DOM element you want to remove
  const elementRanjit = useRef(null);
  const handleRemoveRanjit = () => {
    // Step 3: Use DOM methods to remove the element
    if (elementRanjit.current) {
      elementRanjit.current.remove();
    }
  };
  function AddRanjit() {
    let Ranjit = {
      name: "Ranjit Singhvi",
      city: "GandhiNagar, Gujrat",
    }
    Operators.push(Ranjit);
  }
  // Step 1: Create a ref to the DOM element you want to remove
  const elementPriyam = useRef(null);
  const handleRemovePriyam = () => {
    // Step 3: Use DOM methods to remove the element
    if (elementPriyam.current) {
      elementPriyam.current.remove();
    }
  };
  function AddPriyam() {
    let Priyam = {
      name: "Priyam Patel",
      city: "Jaipur, Rajsthan",
    }
    Operators.push(Priyam);
  }

  let TopM= [];

  function Select() {
    let Top ={
      Eng : Engineer,
      Sup : Supervisor,
    };
    
    TopM.unshift(Top);
    dispatch(TopManegement(Top));
    dispatch(MachineOperators(Operators));
  }




  return (
    <div>
      <h5 className='mt-3' style={{ color: "rgb(17 113 141)" }}><b>Make Your Team For Production</b></h5>
      <hr />
      <div className='team-making mb-3'>
        <label className='m-2 fw-bold text-white lable'>Choose an Engineer Who Can Lead The Team</label>
        <select className="form-select mb-3" aria-label="Default select example" onChange={(e) => setEngineer(e.target.value)}>
          <option selected >Select Engineer To Lead Production Team</option>
          <option value="Shiv Arror">Shiv Arror</option>
          <option value="Gaurav Sawant">Gaurav Sawant</option>
          <option value="Rahul Kanwal">Rahul Kanwal</option>
          <option value="Amit Malviya">Amit Malviya</option>
          <option value="Saurabh Sharma">Saurabh Sharma</option>
        </select>
        <label className='m-2 fw-bold text-white lable'>Choose Supervisor</label>
        <select className="form-select mb-3" aria-label="Default select example" onChange={(e) => setSupervisor(e.target.value)}>
          <option selected >Choose Production Supervisor</option>
          <option value="Shivam Rajpoot">Shivam Rajpoot</option>
          <option value="Gautam Tomar">Gautam Tomar</option>
          <option value="Ankit Verma">Ankit Verma</option>
          <option value="Pramod Shinge">Pramod Shinge</option>
          <option value="Ravikiran Singh">Ravikiran Singh</option>
        </select>

        <hr />
        <h5 className='o-list'><b>List of Operators</b></h5>

        <div className="row mt-3">
          <div className="col">
            <div className='w-80' ref={elementAnkit}>
              <div className='inner'>
                <h5 className='mt-2 username'>Ankit Agrawal</h5>
                <p className='usercity'>Jaipur, Rajsthan</p>
                <hr />
                <button type="button" class="btn btn-warning add fw-bold" onClick={AddAnkit} >CHOOSE</button>
                <button type="button" class="btn btn-danger dismiss fw-bold" onClick={handleRemoveAnkit}>DISMISS</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='w-80' ref={elementHitesh}>
              <div className='inner'>
                <h5 className='mt-2 username'>Hitesh Choudhari</h5>
                <p className='usercity'>Ajmer, Rajsthan</p>
                <hr />
                <button type="button" class="btn btn-warning add fw-bold" onClick={AddHitesh}>CHOOSE</button>
                <button type="button" class="btn btn-danger dismiss fw-bold" onClick={handleRemoveHitesh}>DISMISS</button>
              </div>
            </div>
          </div>
        </div>


        <div className="row mt-3">
          <div className="col">
            <div className='w-80' ref={elementGaurav}>
              <div className='inner'>
                <h5 className='mt-2 username'>Gaurav Choudhari</h5>
                <p className='usercity'>Bikaner, Rajsthan</p>
                <hr />
                <button type="button" class="btn btn-warning add fw-bold" onClick={AddGaurav}>CHOOSE</button>
                <button type="button" class="btn btn-danger dismiss fw-bold" onClick={handleRemoveGaurav}>DISMISS</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='w-80' ref={elementSachin}>
              <div className='inner'>
                <h5 className='mt-2 username'>Sachin Rathore</h5>
                <p className='usercity'>Jodhpur, Rajsthan</p>
                <hr />
                <button type="button" class="btn btn-warning add fw-bold" onClick={AddSachin} >CHOOSE</button>
                <button type="button" class="btn btn-danger dismiss fw-bold" onClick={handleRemoveSachin}>DISMISS</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className='w-80' ref={elementPratik}>
              <div className='inner'>
                <h5 className='mt-2 username'>Pratik Singh</h5>
                <p className='usercity'>Ahemdabad, Gujrat</p>
                <hr />
                <button type="button" class="btn btn-warning add fw-bold" onClick={AddPratik}>CHOOSE</button>
                <button type="button" class="btn btn-danger dismiss fw-bold" onClick={handleRemovePratik}>DISMISS</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='w-80' ref={elementRitesh}>
              <div className='inner'>
                <h5 className='mt-2 username'>Ritesh Patel</h5>
                <p className='usercity'>Surat, Gujrat</p>
                <hr />
                <button type="button" class="btn btn-warning add fw-bold" onClick={AddRitesh}>CHOOSE</button>
                <button type="button" class="btn btn-danger dismiss fw-bold" onClick={handleRemoveRitesh}>DISMISS</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className='w-80' ref={elementVihan}>
              <div className='inner'>
                <h5 className='mt-2 username'>Vihan Patel</h5>
                <p className='usercity'>Rajkot, Gujrat</p>
                <hr />
                <button type="button" class="btn btn-warning add fw-bold" onClick={AddVihan} >CHOOSE</button>
                <button type="button" class="btn btn-danger dismiss fw-bold" onClick={handleRemoveVihan}>DISMISS</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='w-80' ref={elementBhupesh}>
              <div className='inner'>
                <h5 className='mt-2 username'>Bhupesh Patel</h5>
                <p className='usercity'>Indore, Madhya Prasesh</p>
                <hr />
                <button type="button" class="btn btn-warning add fw-bold" onClick={AddBhupesh} >CHOOSE</button>
                <button type="button" class="btn btn-danger dismiss fw-bold" onClick={handleRemoveBhupesh}>DISMISS</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className='w-80' ref={elementRanjit}>
              <div className='inner'>
                <h5 className='mt-2 username'>Ranjit Singhvi</h5>
                <p className='usercity'>Gandhinagar, Gujrat</p>
                <hr />
                <button type="button" class="btn btn-warning add fw-bold" onClick={AddRanjit} >CHOOSE</button>
                <button type="button" class="btn btn-danger dismiss fw-bold" onClick={handleRemoveRanjit}>DISMISS</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='w-80' ref={elementPriyam}>
              <div className='inner'>
                <h5 className='mt-2 username'>Priyam Patel</h5>
                <p className='usercity'>Jaipur, Rajsthan</p>
                <hr />
                <button type="button" class="btn btn-warning add fw-bold" onClick={AddPriyam}>CHOOSE</button>
                <button type="button" class="btn btn-danger dismiss fw-bold" onClick={handleRemovePriyam}>DISMISS</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3 mt-3">
          <div className="col">
            <button type="button" class="btn btn-warning  d-flex m-auto justify-content-center fw-bold mt-3" onClick={Select}>SELECT</button>
          </div>
        </div>
      </div>
    </div >
  )
}




















