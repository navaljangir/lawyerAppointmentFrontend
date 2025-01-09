import { createSlice } from "@reduxjs/toolkit";
import { lawyers } from "../data/database";


const initialState = lawyers;
export const allLawyers = createSlice({
    name: "allLawyers", 
    initialState, 
    reducers : {
        appointLawyerSlot: (state, action) => {
            const { id, date, slot } = action.payload
            const lawyer = state.find((val) => { return val.id == id })
            const existsForDate = lawyer?.appointments.find((val) => { return val.date == date })
            if (existsForDate) {
                existsForDate.slots.push(slot)
            }else{
                lawyer?.appointments.push({
                    date , 
                    slots : [slot]
                })
            }
        }
    }

})

export const {appointLawyerSlot} = allLawyers.actions
export default allLawyers.reducer