import { configureStore } from "@reduxjs/toolkit";
import  bookingDetailsReducer from "./slices/bookingDetails";
import bookingDateReducer from "./slices/bookingDate";
import  selectSlotReducer from "./slices/selectSlot";
import appointmentDetailsReducer from "./slices/appointmentDetails";
import allLawyersReducer from "./slices/allLawyers";

export const store = configureStore({
    reducer : {
        bookingDetails : bookingDetailsReducer,
        bookingDate : bookingDateReducer,
        selectSlot : selectSlotReducer,
        appointmentDetails : appointmentDetailsReducer,
        allLawyers : allLawyersReducer
    }
})

export type IRootState = ReturnType<typeof store.getState>