/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { lawyerDetailType } from "src/lib/slices/bookingDetails";
import { LawyerDetailsPage } from "./LawyerDetails";
import { useSelector } from "react-redux";
import { IRootState } from "src/lib/store";
import { useParams } from "react-router-dom";


interface userAppointmentType  {
    id: string;
    appointmentId: string;
    clientName: string;
    clientPhone: string;
    lawyerId: string;
    appointmentDate: string;
    appointmentTime: string;
    lawyer? : lawyerDetailType
}
export function AppointmentDetails(){
    const phone= useRef("");
    const {aId} = useParams()
    const [appointments , setAppointments] = useState<userAppointmentType[]>();
    const appointmentDetails = useSelector((state: IRootState)=> state.appointmentDetails)
    const allLawyers = useSelector((state : IRootState)=> state.allLawyers)
    const lawyerDetails = (lawyerId :string)=>{
        const lawyerDetails = allLawyers.find((val)=>{return val.id==lawyerId})
        return lawyerDetails
    }

    useEffect(()=>{
        const data=  appointmentDetails.filter((val)=>{return val.clientPhone == aId || val.appointmentId==aId}) 
        if(!data.length){
            setAppointments(undefined)
            return;
        }
        const mapDataWithLawyer = data.map((val) => {
          return  {
            ...val , 
            lawyer : lawyerDetails(val.lawyerId)
           }
        })
        setAppointments(mapDataWithLawyer) 
    } ,[])
    const onSearch = ()=>{

    } 
    return <div className="px-3 py-10">
          <div className="flex justify-center gap-5">
            <Input className="w-96" placeholder="Enter your Mobile/Appointment Id" onChange={(e)=> phone.current = e.target.value}/>
            <Button onClick={onSearch}>Search</Button>
            </div>
        {appointments?.map((val , index)=>{
            return <div key={index}>
                     <div className="flex flex-col gap-3 text-lg mt-5">
                    <div>
                        Client Name : {val.clientName}
                    </div>
                    <div>
                        Client Phone : {val.clientPhone}
                    </div>
                    <div>
                        Appointment Date : {val.appointmentDate}
                    </div>
                    <div>
                        Appointment Time : {val.appointmentTime}
                    </div>
                    <div className="">
                      Lawyer Details :   
                      {val.lawyer &&  <div className="pl-10">
                          <LawyerDetailsPage val={val.lawyer}/>
                        </div>}
                    </div>
                </div>

            </div>
        })}
            {!appointments && <div className="flex justify-center mt-5">No result found</div>}
            
    </div>
}