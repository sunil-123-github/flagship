import React from 'react'
import './Procure.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'


export const Pr = () => {

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


    let totalStell = BBSum * 5 + CWSum * 2 + CLTSum * 3 + CLTSum * 3 + HYDSum * 4 + COUPSum * 3
        + MMSum * 2 + LBSum * 4;
    let totalIorn = BBSum * 6 + CWSum * 3 + CLTSum * 3 + CLTSum * 3 + HYDSum * 4 + COUPSum * 3
        + MMSum * 2 + LBSum * 4;
    let totalAluminium = BBSum * 5 + CWSum * 5 + CLTSum * 3 + CLTSum * 3 + HYDSum * 4 + COUPSum * 3
        + MMSum * 7 + LBSum * 2;
    let totalPolymer = BBSum * 5 + CWSum * 3 + CLTSum * 3 + CLTSum * 11 + HYDSum * 5 + COUPSum * 3
        + MMSum * 2 + LBSum * 8;


    return (
        <div>
            <hr />
            <h4 className='pr'><b>Procurement Status</b></h4>
            <hr />
            <h5 className='text-danger'><b>Total Orders of components to production</b></h5>
            <hr />
            <div className="row mt-4">
                <div className="col-4 d-flex justify-content-center">
                    <div className="Card mb-4">
                        <h2>{BBSum}</h2>
                        <h4>Ball Bearing</h4>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="Card mb-4">
                        <h2>{LBSum}</h2>
                        <h4>Linear Bearing</h4>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="Card mb-4">
                        <h2>{SJSum}</h2>
                        <h4>Screw Jack</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4 d-flex justify-content-center">
                    <div className="Card mb-4">
                        <h2>{HYDSum}</h2>
                        <h4>Hydraulics</h4>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="Card mb-4">
                        <h2>{COUPSum}</h2>
                        <h4>Coupling</h4>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="Card mb-4">
                        <h2>{MMSum}</h2>
                        <h4>Magnet Motor</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4 d-flex justify-content-center">
                    <div className="Card mb-4">
                        <h2>{CLTSum}</h2>
                        <h4>Clutch</h4>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="Card mb-4">
                        <h2>{CWSum}</h2>
                        <h4>Chain Wheel</h4>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <h5 style={{ color: "chocolate" }}><b>Required Materials For Production Based On Orders</b></h5>
                </div>
            </div>
            <div className="row box m-3">

                <div className="col  text-center materials text-white">
                    STEEL : {totalStell} KG
                </div>
                <div className="col text-center materials text-white">
                    AL : {totalAluminium} KG
                </div>
                <div className="col text-center materials text-white">
                    IORN : {totalIorn} KG
                </div>
                <div className="col  text-center materials text-white">
                    POLYMER : {totalPolymer} KG
                </div>
            </div>


        </div>
    )
}
