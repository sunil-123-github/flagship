import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './Order.css'

export const Orders = () => {
  // Access Placed Orders Data From Redux Store
  const Orders = useSelector((state) => {
    return state.Orders;
  })
  const isEmpty = Object.keys(Orders).length === 0;
 
return (
    <div>
      <h5><b>Your Orders</b></h5>
      <hr />
      {isEmpty ?
        <div className="card mb-3 m-auto bg-info empty-card" style={{ width: "27rem"}}>
          <div className="card-body">
            <p className="card-text text-center fw-bold">Order section is empty</p>
          </div>
        </div>
        :
        <ul>
          {Object.keys(Orders).map((orderId) => (
            <li key={orderId}>
              <div className="card mb-3" style={{ width: "27rem" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "navy" }}><b>{`Compony Name: ${Orders[orderId].Name}`}</b></h5>
                  <h5 className="card-subtitle mb-2" style={{ color: "hotpink" }}><b>{`Customer Name: ${Orders[orderId].FullName}`}</b></h5>
                  <p className="card-text"
                    style={{ color: "crimson", fontWeight: "bold" }}>{`Expected Delivery Date : ${Orders[orderId].DDate} ${Orders[orderId].DMonth}
                ${Orders[orderId].DYear} `}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}
