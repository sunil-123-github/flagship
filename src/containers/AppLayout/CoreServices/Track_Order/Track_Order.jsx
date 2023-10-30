import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './Track_Order.css'


export const Track_Order = () => {

  const Orders = useSelector((state) => {
    return state.Orders;
  })
  const isEmpty = Object.keys(Orders).length === 0;

  const Steel = useSelector((state) => {
    return state.Steel;
  })
  const Iorn = useSelector((state) => {
    return state.Iorn;
  })
  const Aluminium = useSelector((state) => {
    return state.Aluminium;
  })
  const Polymer = useSelector((state) => {
    return state.Polymer;
  })
  const IornCount = Iorn[0];
  const SteelCount = Steel[0];
  const AlCount = Aluminium[0];
  const PolyCount = Polymer[0];


  const isReady = useSelector((state) => {
    return state.OrderReady;
  })
  const Ready = isReady.length === 0;

  const Data = useSelector((state) => {
    return state.ComponentProductionState;
  })

 function isObjectEmpty(Data) {
    return Object.keys(Data).length === 0;
  }

  let Empty = isObjectEmpty(Data);


  const activeLinkStyle = {
    background: 'rebeccapurple',
    color: 'white',
  };

  return (
    <div>
      <h5><b>Track Your Orders</b></h5>
      <hr />
      <div className='mb-5'>
        <div className='track-order-div' style={isEmpty == false ? activeLinkStyle : null}>
          <h6>Order Placed</h6>
        </div>
        <div className='track-order-div' style={!(AlCount == undefined && IornCount == undefined
          && SteelCount == undefined && PolyCount == undefined) ? activeLinkStyle : null}>
          <h6>Procurement Has Done</h6>
        </div>
        <div className='track-order-div' style={Empty == true ? null : activeLinkStyle}>
          <h6>Production Completed</h6>
        </div>
        <div className='track-order-div' style={Ready == false ? activeLinkStyle : null}>
          <h6>Ready To Delivery</h6>
        </div>
      </div>
    </div>
  )
}
