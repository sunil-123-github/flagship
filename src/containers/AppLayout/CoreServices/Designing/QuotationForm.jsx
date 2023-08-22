import React, { useState } from 'react';
import './DesigningCSS/Designing.css'
import { useDispatch } from 'react-redux';
import { setUserData } from './../../../../redux-store/Slices/Quotation'
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';

export const QuotationForm = () => {
    // User Details Form
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [ContactNum, setContactNumber] = useState('');
    // Delivery Date Form
    const [Date, setDate] = useState('');
    const [Month, setMonth] = useState('');
    const [Year, setYear] = useState('');

    // Chain Wheel
    const [isChecked, setIsChecked] = useState(false);
    const [numberValue, setNumberValue] = useState(0);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setNumberValue('');
    };
    const handleNumberChange = (event) => {
        return setNumberValue(event.target.value);
    };

    // Ball Bearing
    const [isBBChecked, setBB] = useState(false);
    const [BBNumber, setBBNumber] = useState(0);
    const handleBBCheckbox = () => {
        setBB(!isBBChecked);
        setBBNumber('');
    };
    const handleBBNumber = (event) => {
        setBBNumber(event.target.value);
    };
    //  Hydraulics
    const [isHydChecked, setHyd] = useState(false);
    const [HydNumber, setHydNumber] = useState(0);
    const handleHydBox = () => {
        setHyd(!isHydChecked);
        setHydNumber('');
    }
    const handleHydNumber = (event) => {
        setHydNumber(event.target.value);
    }
    //Screw Jack
    const [isSJChecked, setSJ] = useState(false);
    const [SJNumber, setSJNumber] = useState(0);
    const handleSJBox = () => {
        setSJ(!isSJChecked);
        setSJNumber('');
    }
    const handleSJNumber = (event) => {
        setSJNumber(event.target.value)
    }
    // Linear Bearing
    const [isLBChecked, setLB] = useState(false);
    const [LBNumber, setLBNumber] = useState(0);
    const handleLBBox = () => {
        setLB(!isLBChecked);
        setLBNumber('');
    }
    const handleLBNumber = (event) => {
        setLBNumber(event.target.value);
    }
    //Magnet Motor
    const [isMMChecked, setMM] = useState(false);
    const [MMNumber, setMMNumber] = useState(0);
    const handleMMBox = () => {
        setMM(!isMMChecked);
        setMMNumber('');
    };
    const handleMMNumber = (event) => {
        setMMNumber(event.target.value);
    };
    //Coupling
    const [isCouplingChecked, setCoup] = useState(false);
    const [CoupNumber, setCoupNumber] = useState(0);
    const handleCoupBox = () => {
        setCoup(!isCouplingChecked);
        setCoupNumber('');
    }
    const handleCoupNumber = (event) => {
        setCoupNumber(event.target.value);
    }
    //Clutch
    const [isCltChecked, setClt] = useState(false);
    const [CltNumber, setCltNumber] = useState(0);
    const handleCltBox = () => {
        setClt(!isCltChecked);
        setCltNumber('');
    }
    const handleCltNumber = (event) => {
        setCltNumber(event.target.value);
    }

    const CWState = isChecked;
    const CWValue = numberValue;

    const Data = {
        Name: userName,
        Email: email,
        FullName: fullName,
        ContactNumber: ContactNum,
        DDate: Date,
        DMonth: Month,
        DYear: Year,
        Components: {
            CW: CWState,
            CWC: CWValue,
            BB: isBBChecked,
            BBC: BBNumber,
            HYD: isHydChecked,
            HYDC: HydNumber,
            SJ: isSJChecked,
            SJC: SJNumber,
            LB: isLBChecked,
            LBC: LBNumber,
            MM: isMMChecked,
            MMC: MMNumber,
            COP: isCouplingChecked,
            COPC: CoupNumber,
            CLT: isCltChecked,
            CLTC: CltNumber,
        },
    };

    // Dispatch the User Entered data to Redux Store
    const dispatch = useDispatch();
    dispatch(setUserData(Data));

    


    return (
        <div >
            <div className='mt-4'>
                <h5><b>Initiate Enquiry for Quotation</b></h5>
                <hr />
                <div className="row">
                    <div className="col-3">
                        <h6><b>Benifits</b></h6>
                    </div>
                    <div className="col-8">
                        <h6>Once you have enquired , you will get all the details and Quotation of your order.</h6>

                        <div className='mt-2'>
                            <i className="d-inline bi bi-check-circle-fill "></i>
                            <p className='d-inline'> <b>Blue badge verification</b> <br /> <h6>Stronger security measures that protect your Facebook and Instagram profiles against harassment and potential hacking threats.</h6> </p>
                            <br />
                            <i className="d-inline bi bi-flower1"></i>
                            <p className='d-inline'> <b>Safety and protection measures</b> <br /> <h6>Let people know that your Facebook account has been verified.</h6> </p>
                            <br />
                            <br />
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-3">
                        <h6><b>Requirements</b></h6>
                    </div>
                    <div className="col-8 mb-5">
                        <h6>Organization Details</h6>
                        <div className="row mt-4">
                            <div className="col">
                                <input type="text" placeholder='Name Of Compony' id='organization-name'
                                    onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className="col">
                                <input type="text" placeholder='Email Address' id='organization-name'
                                    onChange={(e) => setEmail(e.target.value)} />

                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <input type="text" placeholder='Full Name' id='organization-name'
                                    onChange={(e) => setFullName(e.target.value)} />

                            </div>
                            <div className="col">
                                <input type="text" placeholder='Contact Number' id='organization-name'
                                    onChange={(e) => setContactNumber(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-3">
                        <h6><b>Component Specifiaction</b></h6>
                    </div>
                    <div className="col-8">
                        <h6>Select Component</h6>
                        <div className="row mt-3">
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        &nbsp;Chain Wheel
                                    </label>
                                </div>
                            </div>
                            <div className="col">

                                {isChecked && (
                                    <div>
                                        <label>
                                            Quantity:&nbsp;
                                            <input
                                                type="number"
                                                value={numberValue}
                                                onChange={handleNumberChange}
                                            />
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        checked={isBBChecked}
                                        onChange={handleBBCheckbox}
                                    />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        &nbsp;Ball Bearing
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col">
                                    {isBBChecked && (
                                        <label className='label-margin' >Quantity:&nbsp;
                                            <input
                                                type="number"
                                                value={BBNumber}
                                                onChange={handleBBNumber}
                                            />
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div class="form-check" >
                                    <input
                                        type="checkbox"
                                        checked={isHydChecked}
                                        onChange={handleHydBox}
                                    />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        &nbsp;Hydraulics
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col">
                                    {isHydChecked && (
                                        <label className='label-margin'>Quantity:&nbsp;
                                            <input
                                                type="number"
                                                value={HydNumber}
                                                onChange={handleHydNumber}
                                            />
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        checked={isSJChecked}
                                        onChange={handleSJBox}
                                    />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        &nbsp;Screw Jack
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col">
                                    {
                                        isSJChecked && (
                                            <label className='label-margin' >Quantity:&nbsp;
                                                <input
                                                    type="number"
                                                    value={SJNumber}
                                                    onChange={handleSJNumber}
                                                />
                                            </label>

                                        )}
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div class="form-check" >
                                    <input
                                        type="checkbox"
                                        checked={isLBChecked}
                                        onChange={handleLBBox}
                                    />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        &nbsp;Linear Bearing
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col">
                                    {
                                        isLBChecked && (
                                            <label className='label-margin'>Quantity:&nbsp;
                                                <input
                                                    type="number"
                                                    value={LBNumber}
                                                    onChange={handleLBNumber}
                                                />
                                            </label>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div class="form-check" >
                                    <input
                                        type="checkbox"
                                        checked={isMMChecked}
                                        onChange={handleMMBox}
                                    />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        &nbsp;Magnet Motor
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col">
                                    {
                                        isMMChecked && (
                                            <label className='label-margin' >Quantity:&nbsp;
                                                <input
                                                    type="number"
                                                    value={MMNumber}
                                                    onChange={handleMMNumber} />
                                            </label>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        checked={isCouplingChecked}
                                        onChange={handleCoupBox}
                                    />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        &nbsp;Coupling
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col">
                                    {
                                        isCouplingChecked && (
                                            <label className='label-margin' >Quantity:&nbsp;
                                                <input
                                                    type="number"
                                                    value={CoupNumber}
                                                    onChange={handleCoupNumber} />

                                            </label>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div class="form-check" >
                                    <input
                                        type="checkbox"
                                        checked={isCltChecked}
                                        onChange={handleCltBox}
                                    />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        &nbsp;Clutch
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col">
                                    {
                                        isCltChecked && (
                                            <label className='label-margin'>Quantity:&nbsp;
                                                <input
                                                    type="number"
                                                    value={CltNumber}
                                                    onChange={handleCltNumber} />
                                            </label>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <div className="row">
                    <div className="col-3">
                        <h6><b>Delivery Timeline</b></h6>
                    </div>
                    <div className="col-8 ">
                        <h6>Schedule Your Order</h6>
                        <div className="row mt-4">
                            <div className="col">
                                <h6>Select Date</h6>
                                <select class="form-select" aria-label="Default select example"
                                    onChange={(e) => setDate(e.target.value)}>
                                    <option selected>Date</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>
                            <div className="col">
                                <h6>Select Month</h6>
                                <select class="form-select" aria-label="Default select example"
                                    onChange={(e) => setMonth(e.target.value)}>
                                    <option selected>Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div className="col">
                                <h6>Select Year</h6>
                                <select class="form-select" aria-label="Default select example"
                                    onChange={(e) => setYear(e.target.value)}>
                                    <option selected>Year</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>
               
          
              
            </div>

        </div>
    )
}


