import { createSlice } from "@reduxjs/toolkit";
import { lawyers } from "../data/database";

const initialState = lawyers
export const selectLawyers = createSlice({
    name : "selectLawyers" , 
    initialState , 
    reducers : {
        setLawyers : (_state, action)=>{
            const {lawyerType , lawyerFirm} = action.payload
            return lawyers.filter((val)=>{
               if(lawyerFirm!='.' && lawyerType!='.'){
                return val.firm==lawyerFirm && val.type.find((lawType)=> {return lawType==lawyerType})
               }
               if(lawyerFirm!='.'){
                return val.firm==lawyerFirm
               }
               if(lawyerType!='.'){
                return val.type.find((lawType)=> {return lawType==lawyerType})
               }
               return true
            })
        }
    }
})
export const {setLawyers} = selectLawyers.actions
export default selectLawyers.reducer