import { isAction } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'
import './Production.css'
import { useNavigate } from 'react-router-dom'

export const ProductionHomePage = () => {

    const Navigate = useNavigate();

    function redirect() {
        Navigate('/production/task-distribution');
    }

    const Orders = useSelector((state) => {
        return state.Orders;
    })

    const isEmpty = Object.keys(Orders).length === 0;

    return (
        <div>
            <hr />
            <h5 className='mt-2 production-heading'><b>Your Orders For Production</b></h5>
            <hr />
            {
                isEmpty ?

                    <div className="card mb-3 m-auto bg-info empty-card" style={{ width: "27rem" }}>
                        <div className="card-body">
                            <p className="card-text text-center fw-bold">Nobody have't Placed Order Yet</p>
                        </div>
                    </div>
                    :
                    <ul>
                        {Object.keys(Orders).map((orderId) => (
                            <li className='order-list' key={orderId}>
                                <div className="card order-card mb-3" style={{ width: "27rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "navy" }}><b>{`Compony Name: ${Orders[orderId].Name}`}</b></h5>
                                        <p className="card-text"
                                            style={{ color: "crimson", fontWeight: "bold" }}>{`Expected Delivery Date : ${Orders[orderId].DDate} ${Orders[orderId].DMonth}
                    ${Orders[orderId].DYear} `}</p>
                                        <hr />

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
            }
        </div>
    )
}
