import React from 'react';
import './PM.css'
import { useSelector } from 'react-redux';
import { IsReady } from '../../../redux-store/Slices/OrderReady';
import { useDispatch } from 'react-redux';

const Performance = () => {
  // Your component logic here

  const dispatch = useDispatch();

 
  function production_done() {
    const isReady = true;
    alert("Order Ready Notification will be Pushed to Customer. (Check it in Order Track Section)");
    dispatch(IsReady(isReady));
  }

  return (
    <div>
      <h5 className='h5 mt-3'><b>DECLARE COMPONENTS IS READY TO DELIVER TO CUSTOMER</b></h5>
      <hr />
      <div className='pd mb-4'>
        <h4>Production Completed ?</h4>
        <button type="button" class="btn btn-success fw-bold mt-2" onClick={production_done}>YES</button>

      </div>

    </div>
  );
};

export default Performance;