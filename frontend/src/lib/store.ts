import { configureStore } from "@reduxjs/toolkit";
import selectLawyerReducer from "./slices/selectLawyers";
import  bookingDetailsReducer from "./slices/bookingDetails";
import bookingDateReducer from "./slices/bookingDate";
import  selectSlotReducer from "./slices/selectSlot";

export const store = configureStore({
    reducer : {
        selectLawyers : selectLawyerReducer,
        bookingDetails : bookingDetailsReducer,
        bookingDate : bookingDateReducer,
        selectSlot : selectSlotReducer
    }
})

export type IRootState = ReturnType<typeof store.getState>