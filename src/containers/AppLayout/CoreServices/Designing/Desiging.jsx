import React, { Fragment } from 'react'
import './DesigningCSS/Designing.css'
import { useState } from 'react'
import { Quotation } from './Quotation';
import { DesigningSlider } from './DesigningSlider'
import { QuotationForm } from './QuotationForm'
import { useDispatch } from 'react-router-dom';
import { Data } from './QuotationForm';

export const Desiging = () => {

    // const [isVisible, setIsVisible] = useState(false);
    // const [sent, setSend] = useState(true);
    // function Click() {
    //     setSend(false)
    //     setIsVisible(true)
    // }


    return (
        <div>
            <DesigningSlider />

            {/* {
                    // sent ? <QuotationForm /> : <Quotation />
                   
                } */}
            <QuotationForm />

            {/* 
            {
                    isVisible ? null :
                        <div className="row mt-5 mb-3">
                            <div className="col d-flex ">
                                <button type="submit" id='submit-btn' className="btn m-auto btn-warning"
                                    onClick={Click}><b>Get a Quotation</b></button>
                            </div>
                        </div>
                } */}

        </div>
    )
}