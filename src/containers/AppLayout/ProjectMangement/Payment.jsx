import React from 'react';
import { useSelector } from 'react-redux';
import './../ProjectMangement/PM.css';
import { LinearBearing } from '../../../redux-store/Slices/Components/LinearBearing';
import { COupling } from '../../../redux-store/Slices/Components/Coupling';

const Payment = () => {

    const BallBearing = useSelector((state) => {
        return state.BallBearing;
    })
    const BBSum = BallBearing.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue);
    }, 0)
    const ScreJack = useSelector((state) => {
        return state.ScrewJack;
    })
    const SJSum = ScreJack.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue);
    }, 0)
    const LB = useSelector((state) => {
        return state.LinearBearing;
    })
    const LBSum = LB.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue);
    }, 0)
    const MM = useSelector((state) => {
        return state.MagnetMotor;
    })
    const MMSum = MM.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue);
    }, 0)
    const COUP = useSelector((state) => {
        return state.Coupling;
    })
    const COUPSum = COUP.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue);
    }, 0)
    const HYD = useSelector((state) => {
        return state.HYdraulics;
    })
    const HYDSum = HYD.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue);
    }, 0)
    const CLT = useSelector((state) => {
        return state.Clutch;
    })
    const CLTSum = CLT.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue);
    }, 0)
    const CW = useSelector((state) => {
        return state.ChainWheel;
    })
    const CWSum = CW.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue);
    }, 0)

    // CHAIN WHEEL
    const CWPayment = useSelector((state) => {
        return state.CWMfg;
    })
    const cw = CWPayment[0];

    function operator() {
        if (cw == undefined) {
            null
        }
        else {
            return cw[1];
        }
    }
    let aa = operator();
    const Data = useSelector((state) => {
        return state.ComponentProductionState;
    })
    const arr = Data[0];
    function getCWProComplete() {
        if (arr == undefined) {
            null
        }
        else {
            return arr[2];
        }
    }
    let CWP = getCWProComplete();

    // BALL BEARING

    const BBOperator = useSelector((state) => {
        return state.BBMfg;
    })
    const bboperator = BBOperator[1];
    function BbOperator() {
        if (bboperator == undefined) {
            null
        }
        else {
            return bboperator[1];
        }
    }
    let BallBearingOperator = BbOperator();
    const BBPro = useSelector((state) => {
        return state.ComponentProductionState;
    })
    const bbp = BBPro[1];
    function getBBProComplete() {
        if (bbp == undefined) {
            null
        }
        else {
            return bbp[2];
        }
    }
    let BBProduction = getBBProComplete();

    // Hydraulics
    const HydOperator = useSelector((state) => {
        return state.HydMfg;
    })
    const hydoperator = HydOperator[0];
    function HYDOperator() {
        if (hydoperator == undefined) {
            null
        }
        else {
            return hydoperator[1];
        }
    }
    let HydraulicsOperator = HYDOperator();

    const HydPro = useSelector((state) => {
        return state.ComponentProductionState;
    })
    const hyd = HydPro[2];
    function getHydProComplete() {
        if (bbp == undefined) {
            null
        }
        else {
            return hyd[2];
        }
    }
    let HydProduction = getHydProComplete();

    // ScrewJack

    const SJOperator = useSelector((state) => {
        return state.SJMfg;
    })
    const sjoperator = SJOperator[0];
    function SjOperator() {
        if (sjoperator == undefined) {
            null
        }
        else {
            return sjoperator[1];
        }
    }
    let ScrewJackOperator = SjOperator();
    const SJPro = useSelector((state) => {
        return state.ComponentProductionState;
    })
    const Sj = SJPro[3];
    function getSJProComplete() {
        if (Sj == undefined) {
            null
        }
        else {
            return Sj[2];
        }
    }
    let SJProduction = getSJProComplete();


    // Linear Bearing

    const LBOperator = useSelector((state) => {
        return state.LBMfg;
    })
    const lboperator = LBOperator[0];
    function LbOperator() {
        if (lboperator == undefined) {
            null
        }
        else {
            return lboperator[1];
        }
    }
    let LinearBearingOperator = LbOperator();
    const LBPro = useSelector((state) => {
        return state.ComponentProductionState;
    })
    const lbPro = LBPro[4];
    function getLBProComplete() {
        if (lbPro == undefined) {
            null
        }
        else {
            return lbPro[2];
        }
    }
    let LinearBearingProduction = getLBProComplete();

    // Coupling
    const COUPOperator = useSelector((state) => {
        return state.CoupMfg;
    })
    const coupoperator = COUPOperator[0];
    function CoupOperator() {
        if (coupoperator == undefined) {
            null
        }
        else {
            return coupoperator[1];
        }
    }
    let CouplingOperator = CoupOperator();
    const COUPPro = useSelector((state) => {
        return state.ComponentProductionState;
    })
    const coupPro = COUPPro[5];
    function getCoupProComplete() {
        if (coupPro == undefined) {
            null
        }
        else {
            return coupPro[2];
        }
    }
    let CouplingProduction = getCoupProComplete();

    // Magnet Motor

    const MMOperator = useSelector((state) => {
        return state.MMMfg;
    })
    const mmoperator = MMOperator[0];
    function MmOperator() {
        if (mmoperator == undefined) {
            null
        }
        else {
            return mmoperator[1];
        }
    }
    let MagnetMotorOperator = MmOperator();
    const MMPro = useSelector((state) => {
        return state.ComponentProductionState;
    })
    const mmPro = MMPro[6];
    function getMmProComplete() {
        if (mmPro == undefined) {
            null
        }
        else {
            return mmPro[2];
        }
    }
    let MagnetMotorProduction = getMmProComplete();

    // Clutch


    const CltOperator = useSelector((state) => {
        return state.CltMfg;
    })
    const cltoperator = CltOperator[0];
    function ClutchtOperator() {
        if (cltoperator == undefined) {
            null
        }
        else {
            return cltoperator[1];
        }
    }
    let ClutchOperator =  ClutchtOperator();

    const CltPro = useSelector((state) => {
        return state.ComponentProductionState;
    })
    const cltPro = CltPro[7];
    function getCltProComplete() {
        if (cltPro == undefined) {
            null
        }
        else {
            return cltPro[2];
        }
    }
    let CLUTCHProduction = getCltProComplete();

    return (
        <div>

            <h5 className='h5 mt-3'><b>Components Production Dashboard</b></h5>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-header">
                                <b>CHAIN WHEEL</b>
                                <p className='fw-bold'>OPERATOR :  {aa == undefined ? <span>Not Avalible</span> : <span>{aa}</span>} </p>
                            </div>
                            <div className="row">
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pc'>Production Completed</b>
                                    <button className='btn btn-primary mt-3'>{CWP == undefined ? <span>0 %</span> : <span>{CWP}%</span>}</button>
                                </div>
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pp'>Production Cost</b>
                                    <button className='btn btn-primary mt-3'>{CWSum * 971} Rs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-header">
                                <b>BALL BEARING</b>
                                <p className='fw-bold'>OPERATOR : {BallBearingOperator == undefined ? <span>Not Avalible</span> : <span>{BallBearingOperator}</span>}</p>
                            </div>
                            <div className="row">
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pc'>Production Completed</b>
                                    <button className='btn btn-primary mt-3'>{BBProduction == undefined ? <span>0 %</span> : <span>{BBProduction}%</span>}</button>
                                </div>
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pp'>Production Cost</b>
                                    <button className='btn btn-primary mt-3'>{BBSum * 933} Rs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-header">
                                <b>HYDRAULICS</b>
                                <p className='fw-bold'>OPERATOR : {HydraulicsOperator == undefined ? <span>Not Avalible</span> : <span>{BallBearingOperator}</span>}</p>
                            </div>
                            <div className="row">
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pc'>Production Completed</b>
                                    <button className='btn btn-primary mt-3'>{HydProduction == undefined ? <span>0 %</span> : <span>{HydProduction}%</span>}</button>
                                </div>
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pp'>Production Cost</b>
                                    <button className='btn btn-primary mt-3'>{HYDSum * 800} Rs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-header">
                                <b>SCREW JACK</b>
                                <p className='fw-bold'>OPERATOR : {ScrewJackOperator == undefined ? <span>Not Avalible</span> : <span>{ScrewJackOperator}</span>} </p>
                            </div>
                            <div className="row">
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pc'>Production Completed</b>
                                    <button className='btn btn-primary mt-3'>{SJProduction == undefined ? <span>0 %</span> : <span>{SJProduction}%</span>}</button>
                                </div>
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pp'>Production Cost</b>
                                    <button className='btn btn-primary mt-3'>{SJSum * 789} Rs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-header">
                                <b>LINEAR BEARING</b>
                                <p className='fw-bold'>OPERATOR : {LinearBearingOperator == undefined ? <span>Not Avalible</span> : <span>{LinearBearingOperator}</span>}</p>
                            </div>
                            <div className="row">
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pc'>Production Completed</b>
                                    <button className='btn btn-primary mt-3'>{LinearBearingProduction == undefined ? <span>0 %</span> : <span>{LinearBearingProduction}%</span>}</button>
                                </div>
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pp'>Production Cost</b>
                                    <button className='btn btn-primary mt-3'>{LBSum * 689} Rs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-header">
                                <b>COUPLING</b>
                                <p className='fw-bold'>OPERATOR : {CouplingOperator == undefined ? <span>Not Avalible</span> : <span>{CouplingOperator}</span>} </p>
                            </div>
                            <div className="row">
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pc'>Production Completed</b>
                                    <button className='btn btn-primary mt-3'>{CouplingProduction == undefined ? <span>0 %</span> : <span>{CouplingProduction}%</span>}</button>
                                </div>
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pp'>Production Cost</b>
                                    <button className='btn btn-primary mt-3'>{COUPSum * 878} Rs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-header">
                                <b>MAGNET MOTOR</b>
                                <p className='fw-bold'>OPERATOR : {MagnetMotorOperator == undefined ? <span>Not Avalible</span> : <span>{MagnetMotorOperator}</span>} </p>
                            </div>
                            <div className="row">
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pc'>Production Completed</b>
                                    <button className='btn btn-primary mt-3'>{MagnetMotorProduction == undefined ? <span>0 %</span> : <span>{MagnetMotorProduction}%</span>}</button>
                                </div>
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pp'>Production Cost</b>
                                    <button className='btn btn-primary mt-3'>{MMSum * 810} Rs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-header">
                                <b>CLUTCH</b>
                                <p className='fw-bold'>OPERATOR :{ClutchOperator == undefined ? <span>Not Avalible</span> : <span>{ClutchOperator}</span>} </p>
                            </div>
                            <div className="row">
                                <div className='col-6 p-3 ml-3'>
                                    <b className='text-danger pc'>Production Completed</b>
                                    <button className='btn btn-primary mt-3'>{CLUTCHProduction == undefined ? <span>0 %</span> : <span>{CLUTCHProduction}%</span>}</button>
                                </div>
                                <div className='col-6 p-3 pr-3'>
                                    <b className='text-danger pp'>Production Cost</b>
                                    <button className='btn btn-primary mt-3'>{CLTSum * 912} Rs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Payment;