import React from 'react'
import './Procure.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { PurchaseAluminium, PurchaseIorn, PurchasePolymer, PurchaseSteel } from '../../../redux-store/Slices/Materials'


export const Choose_suppliers = () => {

  const dispatch = useDispatch();

  const suppliers = {
    Tata: {
      name: "Tata Steel",
      iorn: 123,
      steel: 232,
      al: 110,
      polymer: 146,
      logo: "https://portal.tradebrains.in/_next/image?url=https%3A%2F%2Ftradebrains-portal.s3.ap-south-1.amazonaws.com%2FNIFTY50%2FTATASTEEL.png&w=384&q=75"
    },
    Jindal: {
      name: "Jindal Steel",
      iorn: 125,
      steel: 242,
      al: 105,
      polymer: 147,
      logo: "https://seeklogo.com/images/J/jindal-steel-power-logo-D483305FFE-seeklogo.com.png"
    },
    APL: {
      name: "APL appolo",
      iorn: 122,
      steel: 240,
      al: 115,
      polymer: 137,
      logo: "https://companieslogo.com/img/orig/APLAPOLLO.NS_BIG-90c57d33.png?t=1604067028"
    },
    AIAC: {
      name: "AIAC Ltd.",
      iorn: 119,
      steel: 231,
      al: 114,
      polymer: 130,
      logo: "https://images.squarespace-cdn.com/content/v1/5f625f3e294ff1617ea23b77/feee0e5d-e7ae-4666-a91f-61ea769047db/aiac_logo_last_black.png"
    },
    Rathi: {
      name: "Rathi Bars ",
      iorn: 120,
      steel: 234,
      al: 115,
      polymer: 164,
      logo: "https://5.imimg.com/data5/SELLER/Default/2022/8/QH/XM/CM/157714594/ultratech-cement-500x500.png"
    },
    Nova: {
      name: "Nova Iorn",
      iorn: 125,
      steel: 231,
      al: 109,
      polymer: 155,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/NOVA_logo.svg/1911px-NOVA_logo.svg.png"
    },
    BIL: {
      name: "BIL",
      iorn: 121,
      steel: 239,
      al: 103,
      polymer: 144,
      logo: "https://thumbs.dreamstime.com/z/bil-letter-initial-logo-design-vector-illustration-bil-letter-initial-logo-design-vector-illustration-letter-initial-logo-design-236621878.jpg?w=768"
    },
    Nelcast: {
      name: "Nelcast",
      iorn: 126,
      steel: 234,
      al: 108,
      polymer: 134,
      logo: "https://www.equitybulls.com/equitybullsadmin/uploads/Nelcast%20Limited%202.jpg"
    },
    ISMT: {
      name: "ISMT",
      iorn: 128,
      steel: 249,
      al: 113,
      polymer: 174,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS073okf1SEYCnwKc-aq_hLGbJFnK4ldrqJ_f5H-rIpuA&s"
    },
  }

  let [numberValue, setNUmber] = useState();
  let steel = [];
  let iorn = [];
  let aluminium = [];
  let polymer = [];

  // Event handler to update the state when the input changes
  const handleSteel = (event) => {
    let setNUmber = parseInt(event.target.value);
    steel.push(setNUmber)
  }

  const handleIorn = (event) => {
    let setIorn = parseInt(event.target.value);
    iorn.push(setIorn)
  }

  const handleAluminium = (event) => {
    let setAluminium = parseInt(event.target.value);
    aluminium.push(setAluminium);
  }

  const handlePolymer = (event) => {
    let setPolymer = parseInt(event.target.value);
    polymer.push(setPolymer);
  }


  function addMaterials(){
    let sumsteel = 0;
    for (let i = 0; i < steel.length; i++) {
      sumsteel += steel[i];
    }
    let sumiorn = 0;
    for (let i = 0; i < iorn.length; i++) {
      sumiorn += iorn[i];
    } 
    let sumal = 0;
    for (let i = 0; i < aluminium.length; i++) {
      sumal += aluminium[i];
    }
    let sumpoly = 0;
    for (let i = 0; i < polymer.length; i++) {
      sumpoly += polymer[i];
    }
    
    dispatch(PurchaseSteel(sumsteel));
    dispatch(PurchaseIorn(sumiorn));
    dispatch(PurchaseAluminium(sumal));
    dispatch(PurchasePolymer(sumpoly));
   
  }

  function Click() {  
    addMaterials();
    
  }




  return (
    <div>
      <br />
      <h5><b>Selection Of Suppliers</b></h5>
      <hr />
      <div>
        <h5 className='crimson'>Purchase Materials From Suppliers (Price Per KG)</h5>
        <div>
          <div className="accordion mt-1" id="accordionExample">

            <div className="accordion-item mt-2">
              <div className="accordion-header row" id="headingTwo">
                <button className="accordion-button collapsed bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  <div className="col text-center">
                    <img src={suppliers.Tata.logo} className='circular-image' alt="Tata Steel" />
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Steel</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Tata.steel}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Iorn</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Tata.iorn}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Aluminium</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Tata.al}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Polymer</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Tata.polymer}</h5>
                    </div>
                  </div>
                </button>

              </div>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Steel</label>
                      <input type="number" className='mt-2' placeholder='Steel in KG' id="numberInput"
                        onBlur={handleSteel}
                      />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Iorn </label>
                      <input type="number" className='mt-2' placeholder='Iorn in KG'
                        onBlur={handleIorn}
                      />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity Of Aluminium</label>
                      <input type="number" className='mt-2' placeholder='Aluminium in KG'
                        onBlur={handleAluminium} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Polymer</label>
                      <input type="number" className='mt-2' placeholder='Polymer in KG'
                        onBlur={handlePolymer} />
                    </div>
                  </div>


                </div>
              </div>
            </div>
            <br />

            <div className="accordion-item mt-2">
              <div className="accordion-header row" id="headingTwo">
                <button className="accordion-button collapsed bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <div className="col text-center">
                    <img src={suppliers.APL.logo} className='circular-image' alt="Tata Steel" />
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Steel</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.APL.steel}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Iorn</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.APL.iorn}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Aluminium</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.APL.al}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Polymer</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.APL.polymer}</h5>
                    </div>
                  </div>
                </button>

              </div>

              <div id="collapseTwo" class="accordion-collapse collapse mt-3" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Steel</label>
                      <input type="number" className='mt-2' placeholder='Steel in KG'
                        value={numberValue}
                        onBlur={handleSteel} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Iorn </label>
                      <input type="number" className='mt-2' placeholder='Iorn in KG'
                        onBlur={handleIorn} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity Of Aluminium</label>
                      <input type="number" className='mt-2' placeholder='Aluminium in KG'
                        onBlur={handleAluminium} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Polymer</label>
                      <input type="number" className='mt-2' placeholder='Polymer in KG'
                        onBlur={handlePolymer} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <br />
            <div className="accordion-item mt-2">
              <div className="accordion-header row" id="headingTwo">
                <button className="accordion-button collapsed bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <div className="col text-center">
                    <img src={suppliers.AIAC.logo} className='circular-image' alt="Tata Steel" />
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Steel</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.AIAC.steel}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Iorn</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.AIAC.iorn}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Aluminium</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.AIAC.al}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Polymer</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.AIAC.polymer}</h5>
                    </div>
                  </div>
                </button>

              </div>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Steel</label>
                      <input type="number" className='mt-2' placeholder='Steel in KG'
                        value={numberValue}
                        onBlur={handleSteel} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Iorn </label>
                      <input type="number" className='mt-2' placeholder='Iorn in KG'
                        onBlur={handleIorn} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity Of Aluminium</label>
                      <input type="number" className='mt-2' placeholder='Aluminium in KG' onBlur={handleAluminium} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Polymer</label>
                      <input type="number" className='mt-2' placeholder='Polymer in KG'
                        onBlur={handlePolymer} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="accordion-item mt-2">
              <div className="accordion-header row" id="headingFour">
                <button className="accordion-button collapsed bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <div className="col text-center">
                    <img src={suppliers.BIL.logo} className='circular-image' alt="Tata Steel" />
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Steel</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.BIL.steel}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Iorn</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.BIL.iorn}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Aluminium</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.BIL.al}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Polymer</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.BIL.polymer}</h5>
                    </div>
                  </div>
                </button>

              </div>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Steel</label>
                      <input type="number" className='mt-2' placeholder='Steel in KG'
                        value={numberValue}
                        onBlur={handleSteel} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Iorn </label>
                      <input type="number" className='mt-2' placeholder='Iorn in KG'
                        onBlur={handleIorn} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity Of Aluminium</label>
                      <input type="number" className='mt-2' placeholder='Aluminium in KG' onBlur={handleAluminium} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Polymer</label>
                      <input type="number" className='mt-2' placeholder='Polymer in KG'
                        onBlur={handlePolymer} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="accordion-item mt-2">
              <div className="accordion-header row" id="headingFive">
                <button className="accordion-button collapsed bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  <div className="col text-center">
                    <img src={suppliers.ISMT.logo} className='circular-image' alt="Tata Steel" />
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Steel</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.ISMT.steel}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Iorn</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.ISMT.iorn}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Aluminium</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.ISMT.al}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Polymer</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.ISMT.polymer}</h5>
                    </div>
                  </div>
                </button>

              </div>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Steel</label>
                      <input type="number" className='mt-2' placeholder='Steel in KG'
                        value={numberValue}
                        onBlur={handleSteel} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Iorn </label>
                      <input type="number" className='mt-2' placeholder='Iorn in KG'
                        onBlur={handleIorn} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity Of Aluminium</label>
                      <input type="number" className='mt-2' placeholder='Aluminium in KG' onBlur={handleAluminium} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Polymer</label>
                      <input type="number" className='mt-2' placeholder='Polymer in KG'
                        onBlur={handlePolymer} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="accordion-item mt-2">
              <div className="accordion-header row" id="headingSix">
                <button className="accordion-button collapsed bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  <div className="col text-center">
                    <img src={suppliers.Jindal.logo} className='circular-image' alt="Tata Steel" />
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Steel</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Jindal.steel}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Iorn</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Jindal.iorn}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Aluminium</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Jindal.al}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Polymer</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Jindal.polymer}</h5>
                    </div>
                  </div>
                </button>

              </div>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Steel</label>
                      <input type="number" className='mt-2' placeholder='Steel in KG'
                        value={numberValue}
                        onBlur={handleSteel} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Iorn </label>
                      <input type="number" className='mt-2' placeholder='Iorn in KG'
                        onBlur={handleIorn} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity Of Aluminium</label>
                      <input type="number" className='mt-2' placeholder='Aluminium in KG' onBlur={handleAluminium} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Polymer</label>
                      <input type="number" className='mt-2' placeholder='Polymer in KG'
                        onBlur={handlePolymer} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="accordion-item mt-2">
              <div className="accordion-header row" id="headingSeven">
                <button className="accordion-button collapsed bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  <div className="col text-center">
                    <img src={suppliers.Nelcast.logo} className='circular-image' alt="Tata Steel" />
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Steel</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Nelcast.steel}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Iorn</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Nelcast.iorn}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Aluminium</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Nelcast.al}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Polymer</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Nelcast.polymer}</h5>
                    </div>
                  </div>
                </button>

              </div>
              <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Steel</label>
                      <input type="number" className='mt-2' placeholder='Steel in KG'
                        value={numberValue}
                        onBlur={handleSteel} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Iorn </label>
                      <input type="number" className='mt-2' placeholder='Iorn in KG'
                        onBlur={handleIorn} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity Of Aluminium</label>
                      <input type="number" className='mt-2' placeholder='Aluminium in KG' onBlur={handleAluminium} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Polymer</label>
                      <input type="number" className='mt-2' placeholder='Polymer in KG' onBlur={handlePolymer} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="accordion-item mt-2">
              <div className="accordion-header row" id="headingEight">
                <button className="accordion-button collapsed bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                  <div className="col text-center">
                    <img src={suppliers.Nova.logo} className='circular-image' alt="Tata Steel" />
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Steel</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Nova.steel}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Iorn</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Nova.iorn}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Aluminium</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Nova.al}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Polymer</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Nova.polymer}</h5>
                    </div>
                  </div>
                </button>

              </div>
              <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Steel</label>
                      <input type="number" className='mt-2' placeholder='Steel in KG'
                        value={numberValue}
                        onBlur={handleSteel} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Iorn </label>
                      <input type="number" className='mt-2' placeholder='Iorn in KG'
                        onBlur={handleIorn} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity Of Aluminium</label>
                      <input type="number" className='mt-2' placeholder='Aluminium in KG' onBlur={handleAluminium} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Polymer</label>
                      <input type="number" className='mt-2' placeholder='Polymer in KG' onBlur={handlePolymer} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="accordion-item mt-2">
              <div className="accordion-header row" id="headingNine">
                <button className="accordion-button collapsed bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  <div className="col text-center">
                    <img src={suppliers.Rathi.logo} className='circular-image' alt="Tata Steel" />
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Steel</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Rathi.steel}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Iorn</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Rathi.iorn}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Aluminium</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Rathi.al}</h5>
                    </div>
                  </div>
                  <div className="col brdr">
                    <div className='name'>
                      <h4>Polymer</h4>
                    </div>
                    <div className='price'>
                      <h5>{suppliers.Rathi.polymer}</h5>
                    </div>
                  </div>
                </button>

              </div>
              <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Steel</label>
                      <input type="number" className='mt-2' placeholder='Steel in KG'
                        value={numberValue}
                        onBlur={handleSteel} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Iorn </label>
                      <input type="number" className='mt-2' placeholder='Iorn in KG'
                        onBlur={handleIorn} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity Of Aluminium</label>
                      <input type="number" className='mt-2' placeholder='Aluminium in KG' onBlur={handleAluminium} />
                    </div>
                    <div className="col">
                      <label className='fw-bold label'>Quantity of Polymer</label>
                      <input type="number" className='mt-2' placeholder='Polymer in KG' onBlur={handlePolymer} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <button type="button" class="btn btn-success purchase fw-bold mt-3" onClick={Click}>PURCHASE</button>
          </div>
        </div>

      </div>
    </div>
  )
}






