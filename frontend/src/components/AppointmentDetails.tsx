
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { appointments, lawyers } from "src/lib/data/database";
import { lawyerDetailType } from "src/lib/slices/bookingDetails";
import { LawyerDetailsPage } from "./LawyerDetails";


interface appointmentDetailType{
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
    const [appointmentDetails, setAppointMentDetails] = useState<appointmentDetailType>();
    const onSearch = ()=>{
        const appointmentDetails = appointments.find((val)=>{return val.clientPhone === phone.current}) 
        if(!appointmentDetails){
            setAppointMentDetails(undefined)
            return;
        }
        const findLawyerDetails = lawyers.find((val) => {return val.id==appointmentDetails?.lawyerId})
        const appointDetails=  {
            ...appointmentDetails , 
            lawyer : findLawyerDetails
        }
        setAppointMentDetails(appointDetails)
    }
    return <div className="px-3 py-10">
        <div className="">
            <div className="flex justify-center gap-5">
            <Input className="w-96" placeholder="Enter your Mobile/Appointment Id" onChange={(e)=> phone.current = e.target.value}/>
            <Button onClick={onSearch}>Search</Button>
            </div>
            {!appointmentDetails && <div className="flex justify-center mt-5">No result found</div>}
            {appointmentDetails && 
                <div className="flex flex-col gap-3 text-lg mt-5">
                    <div>
                        Client Name : {appointmentDetails.clientName}
                    </div>
                    <div>
                        Client Phone : {appointmentDetails.clientPhone}
                    </div>
                    <div>
                        Appointment Date : {appointmentDetails.appointmentDate}
                    </div>
                    <div>
                        Appointment Time : {appointmentDetails.appointmentTime}
                    </div>
                    <div className="">
                      Lawyer Details :   
                      {appointmentDetails.lawyer &&  <div className="pl-10">
                          <LawyerDetailsPage val={appointmentDetails.lawyer}/>
                        
                        </div>}
                    </div>
                </div>
            }
        </div>
    </div>
}