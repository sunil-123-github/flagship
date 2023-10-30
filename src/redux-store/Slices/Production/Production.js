import { createSlice } from "@reduxjs/toolkit";

const CWProduction = createSlice({
    name: "ChainWheelProduction",
    initialState: [],
    reducers: {
        ChainWheelProduction: (state, action) => {
            state.push(action.payload);
        }
    }
})

const BBProduction = createSlice({
    name: "BallBearingProduction",
    initialState: [],
    reducers: {
        BallBearingProduction: (state, action) => {
            state.push(action.payload);
        }
    }
})

const HydProduction = createSlice({
    name: "HydraulicsProduction",
    initialState: [],
    reducers: {
        HydraulicsProduction: (state, action) => {
            state.push(action.payload);
        }
    }
})

const SJProduction = createSlice({
    name: "ScrewJackProduction",
    initialState: [],
    reducers: {
        ScrewJackProduction: (state, action) => {
            state.push(action.payload);
        }
    }
})

const LBProduction = createSlice({
    name: "LinearBearingProduction",
    initialState: [],
    reducers: {
        LiniearBearingProduction: (state, action) => {
            state.push(action.payload);
        }
    }
})


const MMProduction = createSlice({
    name: "MagnetMotrProduction",
    initialState: [],
    reducers: {
        MagentMotorProduction: (state, action) => {
            state.push(action.payload);
        }
    }
})

const CPProduction = createSlice({
    name: "CoupProduction",
    initialState: [],
    reducers: {
        CouProduction: (state, action) => {
            state.push(action.payload);
        }
    }
})

const CLTProduction = createSlice({
    name: "CoupProduction",
    initialState: [],
    reducers: {
        ClutchProduction: (state, action) => {
            state.push(action.payload);
        }
    }
})


export { CWProduction };
export {BBProduction};
export {HydProduction};
export {SJProduction};
export {LBProduction};
export {MMProduction};
export {CPProduction};
export {CLTProduction};

export const {HydraulicsProduction} = HydProduction.actions;
export const {BallBearingProduction} = BBProduction.actions;
export const { ChainWheelProduction } = CWProduction.actions;
export const {ScrewJackProduction} = SJProduction.actions;
export const {LiniearBearingProduction} = LBProduction.actions;
export const {MagentMotorProduction} = MMProduction.actions;
export const {CouProduction} = CPProduction.actions;
export const {ClutchProduction} = CLTProduction.actions;
