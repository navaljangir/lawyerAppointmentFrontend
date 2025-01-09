import { createSlice } from "@reduxjs/toolkit";
import { appointmentDetailType } from "./appointmentDetails";


const initialState : appointmentDetailType = {
    id: "null", 
    appointmentId: "null" ,
    clientName: "null" , 
    clientPhone: "null" ,
    lawyerId: "null" ,
    appointmentDate: "null" ,
    appointmentTime:"null"

}
export const confirmedDetails = createSlice({
    name : "confirmedDetails" , 
    initialState , 
    reducers : {
        
    }

})