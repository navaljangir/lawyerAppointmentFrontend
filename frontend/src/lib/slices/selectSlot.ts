import { createSlice } from "@reduxjs/toolkit";

const initialState : string = ""
export const selectSlot = createSlice({
    name : "selectSlot" ,
    initialState , 
    reducers : {
        setSlot : (_state , action)=>{
            return action.payload
        }
    }

})

export default selectSlot.reducer
export const {setSlot} = selectSlot.actions