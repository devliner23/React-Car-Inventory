import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root', 
    initialState: {
        car_name: 'Car Owner Name',
        car_make: 'Car Make',
        car_model: 'Car Model', 
        car_year: 'Car Year', 
        car_color: 'Car Color',
    },
    reducers: {
        chooseName: (state, action) => { state.car_name = action.payload },
        chooseMake: (state, action) => { state.car_make = action.payload },
        chooseModel: (state, action) => { state.car_model = action.payload },
        chooseYear: (state, action) => { state.car_year = action.payload },
        chooseColor: (state, action) => { state.car_color = action.payload }
    },
})

export const reducer = rootSlice.reducer; 
export const { chooseName, chooseMake, chooseModel, chooseYear, chooseColor} = rootSlice.actions