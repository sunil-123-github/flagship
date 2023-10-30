import React from 'react'
import './Procure.css'
import { useSelector } from 'react-redux'

export const P3 = () => {

  const Steel = useSelector((state) => {
    return state.Steel;
  })
  const Iorn = useSelector((state) => {
    return state.Iorn;
  })
  const Aluminium = useSelector((state) => {
    return state.Aluminium;
  })
  const Polymer = useSelector((state) => {
    return state.Polymer;
  })
  const IornCount = Iorn[0];
  const SteelCount = Steel[0];
  const AlCount = Aluminium[0];
  const PolyCount = Polymer[0];

  const TopManegement = useSelector((state) => {
    return state.TopManegement;
  })
  const Operators = useSelector((state) => {
    return state.MachineOperators;
  })

  let TopMN = TopManegement[0];






  return (
    <div>
      <h5 className='mt-3'><b>PROCUREMENT DASHBOARD</b></h5>
      <hr />
      <div className="row mb-3">
        <h5 style={{ color: "darkmagenta" }} className='fw-bold'>Procured Materials From Suppliers</h5>
        <div className="col mt-4">
          <div className="card m-auto d-card" style={{ width: "18rem" }}>
            <div className="card-body">
              {SteelCount == undefined ? <h3 className='text-center'>0</h3> :
                <h3 className='text-center'>{SteelCount}</h3>
              }
              <h5 className='text-center'>STEEL IN KG</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card m-auto mt-4 d-card" style={{ width: "18rem" }}>
            <div className="card-body">
              {IornCount == undefined ? <h3 className='text-center'>0</h3> :
                <h3 className='text-center'>{IornCount}</h3>
              }
              <h5 className='text-center'>IORN IN KG</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <div className="card m-auto  d-card" style={{ width: "18rem" }}>
            <div className="card-body">
              {AlCount == undefined ? <h3 className='text-center'>0</h3> :
                <h3 className='text-center'>{AlCount}</h3>
              }
              <h5 className='text-center'>ALUMINIUM IN KG</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card m-auto  d-card" style={{ width: "18rem" }}>
            <div className="card-body">
              {PolyCount == undefined ? <h3 className='text-center'>0</h3> :
                <h3 className='text-center'>{PolyCount}</h3>
              }
              <h5 className='text-center'>IORN IN KG</h5>
            </div>
          </div>
        </div>
      </div>
     
      <hr />
      <div className="row mt-4">
        <h5 style={{ color: "darkmagenta" }} className='fw-bold'>Team For Production</h5>
        <hr />
        <div className="col mb-3">
          <div className="teamlead p-3">
            {TopMN == undefined ? <h5>Engineer Have Not Selected</h5> : <h5>Engineer : {TopMN.Eng}</h5>
            }
            <hr />
            {TopMN == undefined ? <h5>Supervisor Have Not Selected</h5> : <h5>Supervisor : {TopMN.Sup}</h5>
            }

          </div>
          <hr />
          <h5>List Of Machine Operators</h5>
          <div className="operators mt-3 p-3">
            {Operators[0] == undefined ? <h5>Operators Not Have Seleted</h5> :
              Operators[0].map((item, index) => (
                <div className='operators'  key={index}>
                  <p>Name: {item.name}</p>
                  <p>City: {item.city}</p>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}
