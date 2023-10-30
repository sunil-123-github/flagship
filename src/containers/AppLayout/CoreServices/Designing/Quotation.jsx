import React from 'react'
import './DesigningCSS/Designing.css'
import { useDispatch, useSelector } from 'react-redux'
import { Orders } from '../../../../redux-store/Slices/Orders';
import { useNavigate } from 'react-router-dom';

export const Quotation = () => {

    // Creating Current Date and Time
    const date = new Date();
    const today = date.toLocaleString();

    const Data = useSelector((state) => {
        return state.Quotation;
    });

    // Getting Last Customer From Redux Store
    const lastArray = Data[Data.length - 1];

    const {

        DDate = '',
        DMonth = '',
        DYear = '',
        Email = '',
        FullName = '',
        Name = '',
        Total = '',
        Components = []
    } = lastArray || {}


    let arr = Components;
   


    // Checking if it is empty or not
    const a = FullName === "";

    // Placing the Orders
    const dispatch = useDispatch();
    function redirectToPage() {
        alert("Your Order has been placed!");
        dispatch(Orders(lastArray));
    }

    const Navigate = useNavigate();

    function redirect() {
        Navigate('/coreservices/get-quotation');
    }

    return (
        <div>
            <hr />
            <h5><b>Quotation of Your Order</b></h5>
            <hr />
            {
                a ?
                    <div className="card mb-3 m-auto bg-info text-danger" style={{ width: "27rem" }}>
                        <div className="card-body">
                            <p className="card-text text-center fw-bold">For Quotation Please Fill The Enquiry Form</p>
                        </div>
                    </div>
                    :
                    <div className="quotation">
                        <h2 className='mt-1 quotation-compony-name'>FLAGSHIP MECHANICS LTD.</h2>
                        <h5 className='quote-to'>QUOTE TO :</h5>
                        <div className='d-flex justify-content-between mt-3'>
                            <div>
                                <h6 className='to-quote '>Compony Name : {Name}</h6>
                                <h6 className='to-quote'>Name : {FullName}</h6>
                                <h6 className='to-quote'>Email : {Email} </h6>
                            </div>
                            <div>
                                <h6>Expected Delevery Date : {`${DDate} ${DMonth} ${DYear}`}</h6>
                                <h6>Date :{today}</h6>
                                <h6>Quotation ID : 5173</h6>
                            </div>
                        </div>
                        <hr />
                        <div className='mb-4'>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Component</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Price With GST</th>
                                    </tr>

                                    {Components.map((person, index) => (
                                        <tr key={index}>
                                            <td>{person[0]}</td>
                                            <td>{person[1]}</td>
                                            <td>{`${person[3]} ₹`}</td>
                                            <td>{`${person[4]} ₹`}</td>
                                        </tr>
                                    ))}
                                    <tr >
                                        <td style={{ border: 'none' }}></td>
                                        <td style={{ border: 'none' }}></td>
                                        <td><b>Grand Total :</b></td>
                                        <td style={{ background: 'rgb(12, 206, 255)' }}><b>{`${Total} ₹`}</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr />
                        <div>
                            <h6><b>Terms & Conditions**</b></h6>
                            <p className='mb-0'>1. Once payment has done nothing will be changed.</p>
                            <p>2. We are try to give best.</p>
                        </div>
                    </div>
            }

            <hr />
            {
                a ?
                    <div className='d-flex m-auto mb-3 mt-3'>
                        <button type="submit" id='submit-btn' onClick={() => redirect()} className="btn m-auto btn-danger"
                        ><b>Go To Quotation</b></button>
                    </div>
                    :
                    <div className='d-flex m-auto mb-3 mt-3'>
                        <button type="submit" id='submit-btn' onClick={() => redirectToPage()} className="btn m-auto btn-danger"
                        ><b>Place Your Order</b></button>
                    </div>
            }
        </div>
    )
}

