import React, { createContext, useContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import { LandingPage } from "./Flagship/LandingPage";
import { Procurement } from "./AppLayout/Procurement/Procurement";
import { CoreServices } from "./AppLayout/CoreServices/CoreServices";
import { Production } from "../containers/AppLayout/Production/Production";
import { ProjectMangement } from "./AppLayout/ProjectMangement/ProjectMangement";
import { Desiging } from "./AppLayout/CoreServices/Designing/Desiging";
import { Track_Order } from "./AppLayout/CoreServices/Track_Order/Track_Order";
import { Orders } from "./AppLayout/CoreServices/Orders/Orders";
import { Choose_suppliers } from './AppLayout/Procurement/Choose_suppliers';
import { Purchase } from './AppLayout/Procurement/Purchase';
import { P3 } from './AppLayout/Procurement/P3';
import { Quotation } from './AppLayout/CoreServices/Designing/Quotation';
import { TaskDistribution } from './AppLayout/Production/TaskDistribution';
import { Documentation } from './AppNavigation/Documentation'
import { Manufacture } from './AppLayout/Production/Manufacture';
import { ProductionReport } from './AppLayout/Production/ProductionReport';
import Payment from './AppLayout/ProjectMangement/Payment';
import Performance from './AppLayout/ProjectMangement/Performance';


function App() {
  return (
    <div>
      <Routes>
        {/* Route For LandingPage */}
        <Route path="/" element={<LandingPage />} />

        {/* Routes For CoreServices Section */}
        <Route path="/coreservices/" element={<CoreServices />} >
          <Route path="get-quotation" element={<Desiging />} />
          <Route path="quotation" element={<Quotation />} />
          <Route path="track-your-order" element={<Track_Order />} />
          <Route path="your-orders" element={<Orders />} />
        </Route>

        {/* Routes For Procurement Section */}
        <Route path="/procurement/" element={<Procurement />}>
          <Route path="purchase-materials" element={<Choose_suppliers />} ></Route>
          <Route path="workforce" element={<Purchase />}></Route>
          <Route path="dashboard" element={<P3 />}></Route>
        </Route>

        {/* Routes For Production Section */}
        <Route path="/production/" element={<Production />}>
          <Route path='task-distribution' element={<TaskDistribution />}></Route>
          <Route path='manufacture' element={<Manufacture />} ></Route>
          <Route path='production-report' element={<ProductionReport />}></Route>
        </Route>

        {/* Routes For Project Mangement Section */}
        <Route path="/projectmangement" element={<ProjectMangement />}>
        <Route path='payment' element={<Payment />}></Route>
          <Route path='performance' element={<Performance />}></Route>
        

        </Route>

        {/* Route For Documentation Section */}
        <Route path='/flagship-documentation' element={<Documentation />}></Route>

      </Routes>
    </div>
  );
}
export default App;



