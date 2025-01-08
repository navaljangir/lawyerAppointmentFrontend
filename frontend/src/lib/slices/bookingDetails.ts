import { createSlice } from "@reduxjs/toolkit";

interface Slot {
    date: string;
    slots: string[];
}

export interface lawyerDetailType {
    id: string;
    name: string;
    type: string[];
    cost: number;
    firm: string;
    imgUrl: string;
    slots: Slot[];
    appointments: Slot[]; 
}

const initialState : lawyerDetailType = {
    name  :'null',
    id : 'null', 
    type : [] , 
    cost : 0, 
    firm : 'null',
    imgUrl : 'null',
    slots : [],
    appointments : []
}
export const bookingDetails = createSlice({
    name : "bookingDetails" ,
    initialState , 
    reducers : {
        setBookingDetails : (_state , action)=>{
            return action.payload
        }
    }
})

export const {setBookingDetails} = bookingDetails.actions
export default bookingDetails.reducer