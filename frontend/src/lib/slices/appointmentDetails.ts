import { createSlice } from "@reduxjs/toolkit";

export interface appointmentDetailType{
    id: string;
    appointmentId: string;
    clientName: string;
    clientPhone: string;
    lawyerId: string;
    appointmentDate: string;
    appointmentTime: string;
}

const initialState : appointmentDetailType[] = []
export const appointmentDetails = createSlice({
    name : "appointmentDetails" , 
    initialState, 
    reducers : {
        setAppointmentDetials : (state , action)=>{
            state.push(action.payload)
        }
    }
})

export const {setAppointmentDetials} = appointmentDetails.actions
export default appointmentDetails.reducer