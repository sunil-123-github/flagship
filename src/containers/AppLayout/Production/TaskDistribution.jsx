import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './Production.css'
import { useState } from "react";
import { BallBearingProduction, ChainWheelProduction, HydraulicsProduction } from "../../../redux-store/Slices/Production/Production";
import { ScrewJackProduction, LiniearBearingProduction, MagentMotorProduction } from "../../../redux-store/Slices/Production/Production";
import { CouProduction, ClutchProduction } from "../../../redux-store/Slices/Production/Production";


export const TaskDistribution = () => {

    const dispatch = useDispatch();

    const Operators = useSelector((state) => {
        return state.MachineOperators;
    })

    let arry = function getNameArray() {
        if (Operators[0] === undefined) {
            return undefined
        }
        else {
            let Operator = Operators[0];
            const namesArray = Operator.map(person => person.name);
            return namesArray;
        }
    }
    let newArray = arry();

    // Chain Wheel
    const [chainWheel, setChainWheel] = useState('');
    const handleCWChange = (event) => {
        setChainWheel(event.target.value);
    };
    const [selectedFruit, setSelectedFruit] = useState('');
    const handlecwChange = (event) => {
        setSelectedFruit(event.target.value);
    };
    function ChainWheel() {
        let CWArray = []
        CWArray.push(chainWheel);
        CWArray.push(selectedFruit)
        dispatch(ChainWheelProduction(CWArray));

    }



    // Ball Bearing
    const [ballBearing, setBallBearing] = useState('');
    const handleBBChange = (event) => {
        setBallBearing(event.target.value);
    };
    const [selectedBB, setSelectedBB] = useState('');
    const handleBBSelction = (event) => {
        setSelectedBB(event.target.value);
    };
    function BallBearing() {
        let BBArray = []
        BBArray.push(ballBearing);
        BBArray.push(selectedBB)
        dispatch(BallBearingProduction(BBArray));
    }

    // Hydraulics
    const [hydraulics, setHydraulics] = useState('');
    const handleHydChange = (event) => {
        setHydraulics(event.target.value);
    }
    const [seletedHyd, setSelectedHyd] = useState('');
    const handleHydSelection = (event) => {
        setSelectedHyd(event.target.value);
    }
    function Hydraulics() {
        let HydArray = []
        HydArray.push(hydraulics);
        HydArray.push(seletedHyd);
        dispatch(HydraulicsProduction(HydArray));
    }


    // Screw Jack
    const [screwjack, setSJ] = useState('');
    const handleSjChange = (event) => {
        setSJ(event.target.value);
    }
    const [seletedSJ, setSelectedSJ] = useState('');
    const handleSJSelection = (event) => {
        setSelectedSJ(event.target.value);
    }
    function ScrewJack() {
        let SJArray = []
        SJArray.push(screwjack);
        SJArray.push(seletedSJ);
        dispatch(ScrewJackProduction(SJArray));
    }
    // Linear Bearing
    const [linearBearing, setLB] = useState('');
    const handleLBChange = (event) => {
        setLB(event.target.value);
    }
    const [seletedLB, setSelectedLB] = useState('');
    const handleLBSelection = (event) => {
        setSelectedLB(event.target.value);
    }
    function LinearBearing() {
        let LBArray = []
        LBArray.push(linearBearing);
        LBArray.push(seletedLB);
        dispatch(LiniearBearingProduction(LBArray));
    }

    // Magnet Motr
    const [magentMotor, setMM] = useState('');
    const handleMMChange = (event) => {
        setMM(event.target.value);
    }
    const [seletedMM, setSelectedMM] = useState('');
    const handleMMSelection = (event) => {
        setSelectedMM(event.target.value);
    }
    function MagentMotor() {
        let MMArray = []
        MMArray.push(magentMotor);
        MMArray.push(seletedMM);
        dispatch(MagentMotorProduction(MMArray));
    }


    // Coupling
    const [Coupling, setCoup] = useState('');
    const handleCoupChange = (event) => {
        setCoup(event.target.value);
    }
    const [seletedCoup, setSelectedCoup] = useState('');
    const handleLCoupSelection = (event) => {
        setSelectedCoup(event.target.value);
    }
    function COUP() {
        let CoupArray = []
        CoupArray.push(Coupling);
        CoupArray.push(seletedCoup);
        dispatch(CouProduction(CoupArray));
    }

    // Clutch
    const [Clutch, setClutch] = useState('');
    const handleCltChange = (event) => {
        setClutch(event.target.value);
    }
    const [seletedClt, setSelectedClt] = useState('');
    const handleLCltSelection = (event) => {
        setSelectedClt(event.target.value);
    }
    function CLT() {
        let CltArray = []
        CltArray.push(Clutch);
        CltArray.push(seletedClt);
        dispatch(ClutchProduction(CltArray));
    }


    function SubmitAll(){
     ChainWheel();
     CLT();
     COUP();
     MagentMotor();
     LinearBearing();
     ScrewJack();
     Hydraulics();
     BallBearing();

    }


    return (
        <div>
            <hr />
            <h5 className="distribution"><b>Task Distribution To Operators</b></h5>
            <h5 className="operator">SELECTED OPERATORS</h5>
            <ul>
                {newArray == undefined ? null : newArray.map((name, index) => (
                    <li className="list" key={index}>{name.toUpperCase}</li>
                ))}
            </ul>

            <div className="row">
                {/* Chain Wheel */}
                <div className="col">
                    <div className="work-distribution">
                        <h6 className="component">Chain Wheel</h6>
                        <input
                            type="number"
                            value={chainWheel}
                            onChange={handleCWChange}
                            placeholder="Enter Quantity"
                        />
                        <br /><br />
                        <label className="fw-bold as-op" >Assign to Operator </label><br />
                        <select value="Select Operator" onChange={handlecwChange}>
                            {newArray == undefined ? null :
                                newArray.map((fruit, index) => (
                                    <option key={index} value={fruit.toUpperCase()}>
                                        {fruit}
                                    </option>
                                ))
                            }
                        </select>
                        <br /><br />
                        {/* <button className="btn btn-warning fw-bold" onClick={ChainWheel}>Submit</button> */}
                    </div>
                </div>

                {/* Ball Bearing */}
                <div className="col">
                    <div className="work-distribution">
                        <h6 className="component">Ball Bearing</h6>
                        <input
                            type="number"
                            value={ballBearing}
                            onChange={handleBBChange}
                            placeholder="Enter Quantity"
                        />
                        <br /><br />
                        <label className="fw-bold as-op" >Assign to Operator </label><br />
                        <select value="Select Operator" onChange={handleBBSelction}>
                            {newArray == undefined ? null :
                                newArray.map((fruit, index) => (
                                    <option key={index} value={fruit.toUpperCase()}>
                                        {fruit}
                                    </option>
                                ))
                            }
                        </select>
                        <br /><br />
                        {/* <button className="btn btn-warning fw-bold" onClick={BallBearing}>Submit</button> */}
                    </div>
                </div>
            </div>

            {/* Hydraulics */}
            <div className="row">
                <div className="col">
                    <div className="work-distribution">
                        <h6 className="component">Hydraulics</h6>
                        <input
                            type="number"
                            value={hydraulics}
                            onChange={handleHydChange}
                            placeholder="Enter Quantity"
                        />
                        <br /><br />
                        <label className="fw-bold as-op" >Assign to Operator </label><br />
                        <select value="Select Operator" onChange={handleHydSelection}>
                            {newArray == undefined ? null :
                                newArray.map((fruit, index) => (
                                    <option key={index} value={fruit.toUpperCase()}>
                                        {fruit}
                                    </option>
                                ))
                            }
                        </select>
                        <br /><br />
                        {/* <button className="btn btn-warning fw-bold" onClick={Hydraulics}>Submit</button> */}
                    </div>
                </div>
                <div className="col">
                    <div className="work-distribution">
                        <h6 className="component">Screw Jack</h6>
                        <input
                            type="number"
                            value={screwjack}
                            onChange={handleSjChange}
                            placeholder="Enter Quantity"
                        />
                        <br /><br />
                        <label className="fw-bold as-op" >Assign to Operator </label><br />
                        <select value="Select Operator" onChange={handleSJSelection}>
                            {newArray == undefined ? null :
                                newArray.map((fruit, index) => (
                                    <option key={index} value={fruit.toUpperCase()}>
                                        {fruit}
                                    </option>
                                ))
                            }
                        </select>
                        <br /><br />
                        {/* <button className="btn btn-warning fw-bold" onClick={ScrewJack}>Submit</button> */}
                    </div>
                </div>
            </div>

            {/* Linear Bearing */}
            <div className="row">
                <div className="col">
                    <div className="work-distribution">
                        <h6 className="component">Linear Bearing</h6>
                        <input
                            type="number"
                            value={linearBearing}
                            onChange={handleLBChange}
                            placeholder="Enter Quantity"
                        />
                        <br /><br />
                        <label className="fw-bold as-op" >Assign to Operator </label><br />
                        <select value="Select Operator" onChange={handleLBSelection}>
                            {newArray == undefined ? null :
                                newArray.map((fruit, index) => (
                                    <option key={index} value={fruit.toUpperCase()}>
                                        {fruit}
                                    </option>
                                ))
                            }
                        </select>
                        <br /><br />
                        {/* <button className="btn btn-warning fw-bold" onClick={LinearBearing}>Submit</button> */}
                    </div>
                </div>
                <div className="col">
                    <div className="work-distribution">
                        <h6 className="component">Magnet Motor</h6>
                        <input
                            type="number"
                            value={magentMotor}
                            onChange={handleMMChange}
                            placeholder="Enter Quantity"
                        />
                        <br /><br />
                        <label className="fw-bold as-op" >Assign to Operator </label><br />
                        <select value="Select Operator" onChange={handleMMSelection}>
                            {newArray == undefined ? null :
                                newArray.map((fruit, index) => (
                                    <option key={index} value={fruit.toUpperCase()}>
                                        {fruit}
                                    </option>
                                ))
                            }
                        </select>
                        <br /><br />
                        {/* <button className="btn btn-warning fw-bold" onClick={MagentMotor}>Submit</button> */}
                    </div>
                </div>
            </div>

            {/* Coupling */}
            <div className="row">
                <div className="col">
                    <div className="work-distribution">
                        <h6 className="component">Coupling</h6>
                        <input
                            type="number"
                            value={Coupling}
                            onChange={handleCoupChange}
                            placeholder="Enter Quantity"
                        />
                        <br /><br />
                        <label className="fw-bold as-op" >Assign to Operator </label><br />
                        <select value="Select Operator" onChange={handleLCoupSelection}>
                            {newArray == undefined ? null :
                                newArray.map((fruit, index) => (
                                    <option key={index} value={fruit.toUpperCase()}>
                                        {fruit}
                                    </option>
                                ))
                            }
                        </select>
                        <br /><br />
                        {/* <button className="btn btn-warning fw-bold" onClick={COUP}>Submit</button> */}
                    </div>
                </div>

                {/* Clutch    */}
                <div className="col">
                    <div className="work-distribution">
                        <h6 className="component">Clutch</h6>
                        <input
                            type="number"
                            value={Clutch}
                            onChange={handleCltChange}
                            placeholder="Enter Quantity"
                        />
                        <br /><br />
                        <label className="fw-bold as-op" >Assign to Operator </label><br />
                        <select value={selectedFruit} onChange={handleLCltSelection}>
                            {newArray == undefined ? null :
                                newArray.map((fruit, index) => (
                                    <option key={index} value={fruit.toUpperCase()}>
                                        {fruit}
                                    </option>
                                ))
                            }
                        </select>
                        <br /><br />
                        {/* <button className="btn btn-warning fw-bold" onClick={CLT}>Submit</button> */}
                    </div>
                </div>
            </div>
  
               <hr />
             
            <button className="btn btn-warning fw-bold submitALL" onClick={SubmitAll}>Submit</button>

        </div>
    )
}