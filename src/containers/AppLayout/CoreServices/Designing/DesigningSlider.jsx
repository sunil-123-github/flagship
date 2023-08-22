import React from 'react'
import './DesigningCSS/Designing.css'
import Clutch from './DesigningIMAGES/clutch.jpg'
import { useState } from 'react'
import BallBearing from './DesigningIMAGES/ball-bearings.jpg'
import ChainWheel from './DesigningIMAGES/chain_wheel.jpg'
import Hydraulic from './DesigningIMAGES/hydraulic.jpg'
import LiniearBearings from './DesigningIMAGES/linear-bearings.jpg'
import MagnetMotor from './DesigningIMAGES/magnet-motor.jpg'
import RigidCoupling from './DesigningIMAGES/rigid-coupling.jpg'
import ScrewJack from './DesigningIMAGES/screw-jack.jpg'

export const DesigningSlider = () => {
    const [elementState, setElementState] = useState(ChainWheel);
    const chain_wheel = () => { setElementState(ChainWheel) }
    const coupling = () => { setElementState(RigidCoupling) }
    const ball_bearing = () => { setElementState(BallBearing) }
    const screw_jack = () => { setElementState(ScrewJack) }
    const hydraulics = () => { setElementState(Hydraulic) }
    const linear_bearing = () => { setElementState(LiniearBearings) }
    const magnet_motor = () => { setElementState(MagnetMotor) }
    const clutch = () => { setElementState(Clutch) }

    return (
        <div>
            <h3 className='text-dark fw-bold'>Get Quotation</h3>
            <p className='text-dark fw-bold mt-3'>WHAT WE MANUFACTURES ?</p>
            <div className='d-flex justify-content-center '>
                <img src={elementState} alt="" width={370} height={220} />
            </div>
            <div className='mt-3 mb-3'>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example ">
                    <button type="button" onClick={chain_wheel} class="btn-group-width btn btn-danger ">Chain Wheel</button>
                    <button type="button" onClick={coupling} class="btn-group-width btn btn-warning ">Coupling</button>
                    <button type="button" onClick={ball_bearing} class="btn-group-width btn btn-success ">Ball Bearing</button>
                    <button type="button" onClick={screw_jack} class="btn-group-width btn btn-info ">Screw Jack</button>
                    <button type="button" onClick={hydraulics} class="btn-group-width btn btn-warning ">Hydraulics</button>
                    <button type="button" onClick={linear_bearing} class="btn-group-width btn btn-success ">Linear Bearing</button>
                    <button type="button" onClick={magnet_motor} class="btn-group-width btn btn-warning ">Magnet Motor</button>
                    <button type="button" onClick={clutch} class="btn-group-width btn btn-success">Clutch</button>
                </div>
            </div>
        </div>
    )
}
