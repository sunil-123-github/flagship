import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    ChainWheelProduction, BallBearingProduction, HydraulicsProduction,
    ScrewJackProduction, LinearBearingProduction, MagnetMotorProduction,
    ClutchProduction, CouplingProduction
} from '../../../redux-store/Slices/Component-Production/Components_Proudcution'


export const Manufacture = () => {

    // Casting
    // 1) Chain Wheel
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    // 2) Ball Bearing
    const [isbbChecked, setBBChecked] = useState(false);
    const handleBBChecked = () => {
        setBBChecked(!isbbChecked);
    }
    // 3) Hydraulics
    const [isHydChecked, setHydChecked] = useState(false);
    const handleHydChecked = () => {
        setHydChecked(!isHydChecked);
    }
    // 4) Screw Jack
    const [isSJChecked, setSJChecked] = useState(false)
    const handleSJChecked = () => {
        setSJChecked(!isSJChecked);
    }
    // 5) Linear Bearing
    const [isLBChecked, setLBChecked] = useState(false);
    const handleLBChecked = () => {
        setLBChecked(!isLBChecked);
    }
    // 6) Coupling
    const [isCoupChecked, setCoupChecked] = useState(false);
    const handleCoupChecked = () => {
        setCoupChecked(!isCoupChecked);
    }
    // 7) Magnet Motor
    const [isMMChecked, setMMChecked] = useState(false);
    const handleMMChecked = () => {
        setMMChecked(!isMMChecked);
    }
    // 8) Clutch
    const [isCltChecked, setCltChecked] = useState(false);
    const handleCltChecked = () => {
        setCltChecked(!isCltChecked);
    }


    // Finishing
    // 1) Chain Wheel
    const [finishingChecked, setFinishing] = useState(false);
    const handleFinishing = () => {
        setFinishing(!finishingChecked);
    };
    // 2) Ball Bearing
    const [finishingBBChecked, setBBFinishing] = useState(false);
    const handleBBFinishing = () => {
        setBBFinishing(!finishingBBChecked);
    };
    // 3) Hydrualics
    const [finishingHYDChecked, setHYDFinishing] = useState(false);
    const handleHYDFinishing = () => {
        setHYDFinishing(!finishingHYDChecked);
    }
    // 4) Screw Jack
    const [finishingSJChecked, setSJFinishing] = useState(false);
    const handleSJFinishing = () => {
        setSJFinishing(!finishingSJChecked);
    }
    // Linear Bearing
    const [finishingLBChecked, setLBFinishing] = useState(false);
    const handleLBFinishing = () => {
        setLBFinishing(!finishingLBChecked);
    }
    // Coupling
    const [finishingCoupChecked, setCoupFinishing] = useState(false);
    const handleCoupFinishing = () => {
        setCoupFinishing(!finishingCoupChecked);
    }
    // Magnet Motor
    const [finishingMMChecked, setMMFinishing] = useState(false);
    const handleMMFinishing = () => {
        setMMFinishing(!finishingMMChecked);
    }
    // Clutch
    const [finishingCltChecked, setCltFinishing] = useState(false);
    const handleCltFinishing = () => {
        setCltFinishing(!finishingCltChecked);
    }



    // MFG
    // 1) Chain Wheel
    const [value, setValue] = useState(0); // Initial value
    const handleRangeChange = (event) => {
        setValue(Number(event.target.value));
    }
    // 2) Ball Bearing
    const [BBMfg, setBBMfg] = useState(0); // Initial value
    const handleBBMfg = (event) => {
        setBBMfg(Number(event.target.value));
    }
    // 3) Hydraulics
    const [HydMfg, setHydMfg] = useState(0); // Initial value
    const handleHydMfg = (event) => {
        setHydMfg(Number(event.target.value));
    }
    // 4) Screw Jack
    const [SJMfg, setSJMfg] = useState(0); // Initial value
    const handleSJMfg = (event) => {
        setSJMfg(Number(event.target.value));
    }
    // 5) Linear Bearing
    const [LBMfg, setLBMfg] = useState(0); // Initial value
    const handleLBMfg = (event) => {
        setLBMfg(Number(event.target.value));
    }
    // 6) Coupling
    const [CoupMfg, setCoupMfg] = useState(0); // Initial value
    const handleCoupMfg = (event) => {
        setCoupMfg(Number(event.target.value));
    }
    // 7) Magnet Motor
    const [MMMfg, setMMMfg] = useState(0)
    const handleMMMfg = (event) => {
        setMMMfg(Number(event.target.value));
    }
    // 8) Clutch 
    const [CltMfg, setCltMfg] = useState(0);
    const handleCltMfg = (event) => {
        setCltMfg(Number(event.target.value));
    }



    // Quality Assurance
    // 1) Chain Wheel
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
    // 2) Ball Bearing
    const [BBOpt, setBBOpt] = useState(null);
    const handleBBOpt = (event) => {
        setBBOpt(event.target.value);
    }
    // 3) Hydrualics
    const [HydOpt, setHydOpt] = useState(null);
    const handleHydOpt = (event) => {
        setHydOpt(event.target.value);
    }
    // 4) Screw Jack
    const [SJOpt, setSJOpt] = useState(null);
    const handleSJOpt = (event) => {
        setSJOpt(event.target.value);
    }
    // 5) Linear Bearing
    const [LBOpt, setLBOpt] = useState(null);
    const handleLBOpt = (event) => {
        setLBOpt(event.target.value);
    }
    // 6) Coupling
    const [CoupOpt, setCoupOpt] = useState(null);
    const handleCoupOpt = (event) => {
        setCoupOpt(event.target.value);
    }
    // 7) Magnet Motor
    const [MMOpt, setMMOpt] = useState(null);
    const handleMMOpt = (event) => {
        setMMOpt(event.target.value);
    }
    // 8) Cltuch
    const [CltOpt, setCltOpt] = useState(null);
    const handleCltOpt = (event) => {
        setCltOpt(event.target.value);
    }

    let ChainWhellArray = [];
    let BallBearingArray = [];
    let HydraulicsArray = [];
    let ScrewJackArray = [];
    let LinearBearingArray = [];
    let CouplingArray = [];
    let MagentMotorArray = [];
    let ClutchArray = [];

    ChainWhellArray.push(isChecked, selectedOption, value, finishingChecked);
    BallBearingArray.push(isbbChecked, BBOpt, BBMfg, finishingBBChecked);
    HydraulicsArray.push(isHydChecked, HydOpt, HydMfg, finishingHYDChecked);
    ScrewJackArray.push(isSJChecked, SJOpt, SJMfg, finishingSJChecked);
    LinearBearingArray.push(isLBChecked, LBOpt, LBMfg, finishingLBChecked);
    CouplingArray.push(isCoupChecked, CoupOpt, CoupMfg, finishingCoupChecked);
    MagentMotorArray.push(isMMChecked, MMOpt, MMMfg, finishingMMChecked);
    ClutchArray.push(isCltChecked, CltOpt, CltMfg, finishingCltChecked);



    const dispatch = useDispatch();
    function Submit() {

        dispatch(ChainWheelProduction(ChainWhellArray));
        dispatch(BallBearingProduction(BallBearingArray));
        dispatch(HydraulicsProduction(HydraulicsArray));
        dispatch(ScrewJackProduction(ScrewJackArray));
        dispatch(LinearBearingProduction(LinearBearingArray));
        dispatch(CouplingProduction(CouplingArray));
        dispatch(MagnetMotorProduction(MagentMotorArray));
        dispatch(ClutchProduction(ClutchArray));
    }

    return (
        <div>

            <h5 className="fw-bold mt-3 production">Production Section</h5>
            <hr />

            {/* Chain Wheel */}
            <div className="cw-mfg">
                <p className="head">CHAIN WHEEL MANUFACTURING</p>
                <div className="row cw-row">
                    <div className="col-6 casting">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Casting</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 fabrication">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Manufacturing</h5>
                            </div>
                            <div className="col">
                                <input
                                    className="input-range"
                                    type="range"
                                    id="myRange"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={value}
                                    onChange={handleRangeChange}
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cw-row">
                    <div className="col-6 machining">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Finishing</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={finishingChecked}
                                        onChange={handleFinishing}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 qc">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Quality Assurance</h5>
                            </div>
                            <div className="col">
                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Poor"
                                        checked={selectedOption === 'Poor'}
                                        onChange={handleOptionChange}
                                    />
                                    Poor
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Moderate"
                                        checked={selectedOption === 'Moderate'}
                                        onChange={handleOptionChange}
                                    />
                                    Moderate
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Excellent"
                                        checked={selectedOption === 'Excellent'}
                                        onChange={handleOptionChange}
                                    />
                                    Excellent
                                </label>
                                {/* <p>{selectedOption}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ball Bearing */}
            <div className="cw-mfg">
                <p className="head">BALL BEARING MANUFACTURING</p>
                <div className="row cw-row">
                    <div className="col-6 casting">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Casting</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={isbbChecked}
                                        onChange={handleBBChecked}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 fabrication">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Manufacturing</h5>
                            </div>
                            <div className="col">
                                <input
                                    className="input-range"
                                    type="range"
                                    id="myRange"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={BBMfg}
                                    onChange={handleBBMfg}
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cw-row">
                    <div className="col-6 machining">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Finishing</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={finishingBBChecked}
                                        onChange={handleBBFinishing}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 qc">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Quality Assurance</h5>
                            </div>
                            <div className="col">
                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Poor"
                                        checked={BBOpt === 'Poor'}
                                        onChange={handleBBOpt}
                                    />
                                    Poor
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Moderate"
                                        checked={BBOpt === 'Moderate'}
                                        onChange={handleBBOpt}
                                    />
                                    Moderate
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Excellent"
                                        checked={BBOpt === 'Excellent'}
                                        onChange={handleBBOpt}
                                    />
                                    Excellent
                                </label>
                                {/* <p>{selectedOption}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hydrulics */}
            <div className="cw-mfg">
                <p className="head">HYDRAULICS MANUFACTURING</p>
                <div className="row cw-row">
                    <div className="col-6 casting">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Casting</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={isHydChecked}
                                        onChange={handleHydChecked}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 fabrication">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Manufacturing</h5>
                            </div>
                            <div className="col">
                                <input
                                    className="input-range"
                                    type="range"
                                    id="myRange"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={HydMfg}
                                    onChange={handleHydMfg}
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cw-row">
                    <div className="col-6 machining">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Finishing</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={finishingHYDChecked}
                                        onChange={handleHYDFinishing}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 qc">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Quality Assurance</h5>
                            </div>
                            <div className="col">
                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Poor"
                                        checked={HydOpt === 'Poor'}
                                        onChange={handleHydOpt}
                                    />
                                    Poor
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Moderate"
                                        checked={HydOpt === 'Moderate'}
                                        onChange={handleHydOpt}
                                    />
                                    Moderate
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Excellent"
                                        checked={HydOpt === 'Excellent'}
                                        onChange={handleHydOpt}
                                    />
                                    Excellent
                                </label>
                                {/* <p>{selectedOption}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Screw Jack */}
            <div className="cw-mfg">
                <p className="head">SCREW JACK MANUFACTURING</p>
                <div className="row cw-row">
                    <div className="col-6 casting">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Casting</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={isSJChecked}
                                        onChange={handleSJChecked}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 fabrication">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Manufacturing</h5>
                            </div>
                            <div className="col">
                                <input
                                    className="input-range"
                                    type="range"
                                    id="myRange"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={SJMfg}
                                    onChange={handleSJMfg}
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cw-row">
                    <div className="col-6 machining">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Finishing</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={finishingSJChecked}
                                        onChange={handleSJFinishing}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 qc">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Quality Assurance</h5>
                            </div>
                            <div className="col">
                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Poor"
                                        checked={SJOpt === 'Poor'}
                                        onChange={handleSJOpt}
                                    />
                                    Poor
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Moderate"
                                        checked={SJOpt === 'Moderate'}
                                        onChange={handleSJOpt}
                                    />
                                    Moderate
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Excellent"
                                        checked={SJOpt === 'Excellent'}
                                        onChange={handleSJOpt}
                                    />
                                    Excellent
                                </label>
                                {/* <p>{selectedOption}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Linear Bearing */}
            <div className="cw-mfg">
                <p className="head">LINEAR BEARING MANUFACTURING</p>
                <div className="row cw-row">
                    <div className="col-6 casting">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Casting</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={isLBChecked}
                                        onChange={handleLBChecked}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 fabrication">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Manufacturing</h5>
                            </div>
                            <div className="col">
                                <input
                                    className="input-range"
                                    type="range"
                                    id="myRange"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={LBMfg}
                                    onChange={handleLBMfg}
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cw-row">
                    <div className="col-6 machining">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Finishing</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={finishingLBChecked}
                                        onChange={handleLBFinishing}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 qc">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Quality Assurance</h5>
                            </div>
                            <div className="col">
                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Poor"
                                        checked={LBOpt === 'Poor'}
                                        onChange={handleLBOpt}
                                    />
                                    Poor
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Moderate"
                                        checked={LBOpt === 'Moderate'}
                                        onChange={handleLBOpt}
                                    />
                                    Moderate
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Excellent"
                                        checked={LBOpt === 'Excellent'}
                                        onChange={handleLBOpt}
                                    />
                                    Excellent
                                </label>
                                {/* <p>{selectedOption}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Coupling */}
            <div className="cw-mfg">
                <p className="head">COUPLING MANUFACTURING</p>
                <div className="row cw-row">
                    <div className="col-6 casting">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Casting</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={isCoupChecked}
                                        onChange={handleCoupChecked}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 fabrication">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Manufacturing</h5>
                            </div>
                            <div className="col">
                                <input
                                    className="input-range"
                                    type="range"
                                    id="myRange"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={CoupMfg}
                                    onChange={handleCoupMfg}
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cw-row">
                    <div className="col-6 machining">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Finishing</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={finishingCoupChecked}
                                        onChange={handleCoupFinishing}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 qc">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Quality Assurance</h5>
                            </div>
                            <div className="col">
                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Poor"
                                        checked={CoupOpt === 'Poor'}
                                        onChange={handleCoupOpt}
                                    />
                                    Poor
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Moderate"
                                        checked={CoupOpt === 'Moderate'}
                                        onChange={handleCoupOpt}
                                    />
                                    Moderate
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Excellent"
                                        checked={CoupOpt === 'Excellent'}
                                        onChange={handleCoupOpt}
                                    />
                                    Excellent
                                </label>
                                {/* <p>{selectedOption}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Magnet Motor  */}
            <div className="cw-mfg">
                <p className="head">MAGNET MOTOR MANUFACTURING</p>
                <div className="row cw-row">
                    <div className="col-6 casting">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Casting</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={isMMChecked}
                                        onChange={handleMMChecked}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 fabrication">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Manufacturing</h5>
                            </div>
                            <div className="col">
                                <input
                                    className="input-range"
                                    type="range"
                                    id="myRange"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={MMMfg}
                                    onChange={handleMMMfg}
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cw-row">
                    <div className="col-6 machining">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Finishing</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={finishingMMChecked}
                                        onChange={handleMMFinishing}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 qc">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Quality Assurance</h5>
                            </div>
                            <div className="col">
                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Poor"
                                        checked={MMOpt === 'Poor'}
                                        onChange={handleMMOpt}
                                    />
                                    Poor
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Moderate"
                                        checked={MMOpt === 'Moderate'}
                                        onChange={handleMMOpt}
                                    />
                                    Moderate
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Excellent"
                                        checked={MMOpt === 'Excellent'}
                                        onChange={handleMMOpt}
                                    />
                                    Excellent
                                </label>
                                {/* <p>{selectedOption}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clutch */}
            <div className="cw-mfg">
                <p className="head">CLUTCH MANUFACTURING</p>
                <div className="row cw-row">
                    <div className="col-6 casting">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Casting</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={isCltChecked}
                                        onChange={handleCltChecked}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 fabrication">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Manufacturing</h5>
                            </div>
                            <div className="col">
                                <input
                                    className="input-range"
                                    type="range"
                                    id="myRange"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={CltMfg}
                                    onChange={handleCltMfg}
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cw-row">
                    <div className="col-6 machining">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Finishing</h5>
                            </div>
                            <div className="col">
                                <label>
                                    <input
                                        className="input-box"
                                        type="checkbox"
                                        checked={finishingCltChecked}
                                        onChange={handleCltFinishing}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 qc">
                        <div className="row">
                            <div className="col">
                                <h5 className="casting-heading">Quality Assurance</h5>
                            </div>
                            <div className="col">
                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Poor"
                                        checked={CltOpt === 'Poor'}
                                        onChange={handleCltOpt}
                                    />
                                    Poor
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Moderate"
                                        checked={CltOpt === 'Moderate'}
                                        onChange={handleCltOpt}
                                    />
                                    Moderate
                                </label>

                                <label className="w-100">
                                    <input
                                        type="radio"
                                        name="options"
                                        value="Excellent"
                                        checked={CltOpt === 'Excellent'}
                                        onChange={handleCltOpt}
                                    />
                                    Excellent
                                </label>
                                {/* <p>{selectedOption}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex mb-3">
                <hr />
                <button type="button" class="btn m-auto fw-bold btn-outline-success" onClick={Submit}>Submit Report</button>

            </div>
        </div>
    )
}

