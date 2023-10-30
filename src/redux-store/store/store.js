import { configureStore } from "@reduxjs/toolkit";
import { CustomerQuotation } from "../Slices/Quotation";
import { PlacedOrders } from "../Slices/Orders";
import { SuppliersList } from "../Slices/Suppliers";
import { Steel } from "../Slices/Materials";
import { Iorn } from "../Slices/Materials";
import { Polymer } from '../Slices/Materials';
import { Aluminium } from "../Slices/Materials";
import { Ball_Bearing } from "../Slices/Components/BallBearing";
import { Chain_Wheel } from "../Slices/Components/ChainWheel";
import { Clutch } from "../Slices/Components/Clutch";
import { Screw_Jack } from "../Slices/Components/ScrewJack";
import { Magent_Motor } from "../Slices/Components/MagnetMotor";
import { Linear_Bearing } from "../Slices/Components/LinearBearing";
import { HYD } from "../Slices/Components/Hydraulics";
import { Coupling } from "../Slices/Components/Coupling";
import { TopMNG } from "../Slices/Team";
import { Operators } from "../Slices/Team";
import { SelectedOperators } from "../Slices/Operators/Operators";
import { CLTProduction, CWProduction, HydProduction, LBProduction, MMProduction, SJProduction } from "../Slices/Production/Production";
import { BBProduction, CPProduction } from "../Slices/Production/Production";
import { Components_Production } from "../Slices/Component-Production/Components_Proudcution";
import { OrderReady } from "../Slices/OrderReady";


export const store = configureStore({
  reducer: {
    Quotation: CustomerQuotation.reducer,
    Orders: PlacedOrders.reducer,
    Suppliers: SuppliersList.reducer,
    BallBearing: Ball_Bearing.reducer,
    ChainWheel: Chain_Wheel.reducer,
    Clutch: Clutch.reducer,
    ScrewJack: Screw_Jack.reducer,
    MagnetMotor: Magent_Motor.reducer,
    LinearBearing: Linear_Bearing.reducer,
    HYdraulics: HYD.reducer,
    Coupling: Coupling.reducer,
    Steel: Steel.reducer,
    Iorn: Iorn.reducer,
    Aluminium: Aluminium.reducer,
    Polymer: Polymer.reducer,
    TopManegement: TopMNG.reducer,
    MachineOperators: Operators.reducer,
    SelectedOperators: SelectedOperators.reducer,
    CWMfg: CWProduction.reducer,
    BBMfg: BBProduction.reducer,
    HydMfg: HydProduction.reducer,
    SJMfg: SJProduction.reducer,
    LBMfg: LBProduction.reducer,
    MMMfg: MMProduction.reducer,
    CoupMfg: CPProduction.reducer,
    CltMfg: CLTProduction.reducer,
    ComponentProductionState: Components_Production.reducer,
    OrderReady : OrderReady.reducer,
   

  },
});