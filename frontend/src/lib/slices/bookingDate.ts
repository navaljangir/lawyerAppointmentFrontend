import { createSlice } from "@reduxjs/toolkit";

const initialState : string = (new Date()).toISOString()
export const bookingDate = createSlice({
    name : "bookingDate",
    initialState , 
    reducers : {
        setBookingDate : (_state , action)=>{
            console.log(action.payload)
            return action.payload
        }
    }

})

export const {setBookingDate} = bookingDate.actions
export default bookingDate.reducer