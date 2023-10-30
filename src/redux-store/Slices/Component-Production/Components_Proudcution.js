import { createSlice } from "@reduxjs/toolkit";


const Components_Production = createSlice({
    name: "Components_Proudction",
    initialState: [],
    reducers: {
        ChainWheelProduction: (state, action) => {
            state.push(action.payload);
        },
        BallBearingProduction: (state, action) => {
            state.push(action.payload);
        },
        HydraulicsProduction: (state, action) => {
            state.push(action.payload);
        },
        ScrewJackProduction: (state, action) => {
            state.push(action.payload);
        },
        LinearBearingProduction: (state, action) => {
            state.push(action.payload);
        },
        CouplingProduction: (state, action) => {
            state.push(action.payload);
        },
        MagnetMotorProduction: (state, action) => {
            state.push(action.payload);
        },
        ClutchProduction: (state, action) => {
            state.push(action.payload);
        }

    }
})


export { Components_Production };
export const { ChainWheelProduction } = Components_Production.actions;
export const { BallBearingProduction } = Components_Production.actions;
export const { HydraulicsProduction } = Components_Production.actions;
export const { ScrewJackProduction } = Components_Production.actions;
export const { LinearBearingProduction } = Components_Production.actions;
export const { CouplingProduction } = Components_Production.actions;
export const { MagnetMotorProduction } = Components_Production.actions;
export const { ClutchProduction } = Components_Production.actions;








