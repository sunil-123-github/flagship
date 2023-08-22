import React, { createContext, useContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import { LandingPage } from "./Flagship/LandingPage";
import { Procurement } from "./AppLayout/Procurement/Procurement";
import { CoreServices } from "./AppLayout/CoreServices/CoreServices";
import { Production } from "../containers/AppLayout/Production/Production";
import { ProjectMangement } from "./AppLayout/ProjectMangement/ProjectMangement";
import { Sales } from "./AppLayout/Sales/Sales";
import { Desiging } from "./AppLayout/CoreServices/Designing/Desiging";
import {Installing} from "./AppLayout/CoreServices/Installing/Installing";
import {Maintenance} from "./AppLayout/CoreServices/Maintenance/Maintenance";
import {Mfg} from "./AppLayout/CoreServices/Manufacturing/Mfg";
import { Quotation } from './AppLayout/CoreServices/Designing/Quotation';

function App() {  
  return (
   <div>                                                                                                        
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coreservices/" element={<CoreServices />} >
          <Route path="get-quotation" element={<Desiging/>} ></Route>
          <Route path="installing" element={<Installing/>} />
          <Route path="maintenance" element={<Maintenance/>} />
          <Route path="manufacturing" element={<Mfg/>} />        
        </Route>
        <Route path="/Procurement" element={<Procurement />}></Route>
        <Route path="/Production" element={<Production />}></Route>
        <Route path="/ProjectMangement" element={<ProjectMangement />}></Route>
        <Route path="/Sales" element={<Sales />}></Route>
      </Routes>   
    </div>
  );
}
export default App;



