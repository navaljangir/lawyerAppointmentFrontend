/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/lib/store";
import { LawyerDetailsPage } from "./LawyerDetails";
import { DatePicker } from "./ui/DatePicker";
import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { setSlot } from "src/lib/slices/selectSlot";
import { CircleCheck } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { setAppointmentDetials } from "src/lib/slices/appointmentDetails";
import { appointLawyerSlot } from "src/lib/slices/allLawyers";

export function BookingSideBar() {
    const bookingDetials = useSelector((state: IRootState) => state.bookingDetails)
    const [slots, setSlots] = useState(['']);
    const bookingDate = useSelector((state: IRootState) => state.bookingDate)
    const selectSlot = useSelector((state : IRootState) => state.selectSlot)
    const appointmentDetails = useSelector((state : IRootState)=> state.appointmentDetails)
    const [booked, setBooked] = useState(true)
    const navigate = useNavigate()
    const clientName = useRef('');
    const clientPhone= useRef('');
    const dispatch = useDispatch();
    const onBookAppointment = ()=>{
        if(clientPhone.current.length!=10){
            toast.warning('Enter Valid Phone Number', {
                duration : 2000
            })
            return;
        }
        if(!clientName.current){
            toast.warning('Enter Name', {
                duration : 2000,
                className : "text-red-600"
            })
            return
        }
        if(!slots.includes(selectSlot)){
            toast.warning('Select a slot' , {
                duration : 2000,
                className : "text-red-600"
            })
            return;
        }
        const alreadyBooked = appointmentDetails.find((val)=> {return val.clientPhone==clientPhone.current && val.appointmentDate==format(bookingDate , "dd-MM-y") && val.appointmentTime==selectSlot})
        if(alreadyBooked){
            toast.warning('You already have a booking at Selected Date/Time' , {
                duration : 2000
            })
            return;
        }
        const aId = (Math.random() + 1).toString(36).substring(7);
        dispatch(setAppointmentDetials({
            id : appointmentDetails.length ,
            appointmentId : aId, 
            clientName : clientName.current ,
            clientPhone : clientPhone.current, 
            lawyerId : bookingDetials.id,
            appointmentDate: format(bookingDate , "dd-MM-y"),
            appointmentTime : selectSlot
        }))
        dispatch(appointLawyerSlot({id : bookingDetials.id ,date:  format(bookingDate , "dd-MM-y") ,slot :  selectSlot}))
        setBooked(true) 
    toast.success('Appointment Booked' , {
        duration : 2000, 
        className : "text-green-600"
    })
        navigate(`/details/${aId}`)
    }
    
    useEffect(() => {
        const formattedDate = format(bookingDate, "dd-MM-y");
        const selectedDaySlots = bookingDetials.slots.find((val) => val.date === formattedDate)?.slots || []
        const appointedSlots = bookingDetials.appointments.find((val) => val.date === formattedDate)?.slots || []
        const availableSlots = selectedDaySlots.filter((val) => !appointedSlots.includes(val))
        setSlots(availableSlots)
        return setBooked(false)
    }, [bookingDate, appointmentDetails])
    return (<div className="h-full px-5 py-10 flex flex-col gap-3">
        <div>

        <div className="text-4xl font-semibold">
            Booking Details
        </div>
        <div className="pt-5">
            <div className="p-3 w-40 h-40 border border-dashed border-black rounded-full mb-3">
                <img src={bookingDetials.imgUrl} className="object-cover h-full w-full rounded-full"></img>
            </div>
            <div>
                <LawyerDetailsPage val={bookingDetials} />
            </div>
            <div>
                Choose a Date for Appointment:  <DatePicker />
            </div>
            <div className="flex gap-2 items-center mt-1">
                Select Time Slots :{!slots.length && <div>No appointment available</div>} {slots.map((val, index) => {
                    return <Button className={`p-1 rounded-md hover: ${selectSlot==val ? 'bg-blue-800' : 'bg-sky-400'}`} key={index} 
                    onClick={()=>{
                        dispatch(setSlot(val))
                    }}>{val}</Button>
                })}
            </div>
        </div>
        </div>
        <div className="flex flex-col gap-2 ">
            <div className="flex items-center gap-2">
                <div className="whitespace-nowrap w-48">
                    Enter your name : 
                </div>
            <Input placeholder="Enter the Name" onChange={(e)=> clientName.current = e.target.value}/>
            </div>
            <div className="flex items-center gap-2">
                <div className="whitespace-nowrap w-48">
                    Enter your phone : 
                </div>
            <Input placeholder="Enter the Number" onChange={(e)=> clientPhone.current = e.target.value}/>
            </div>
        </div>
        {booked && <div className="flex">
                <div className="text-green-600">
                    <CircleCheck/>   
                    </div>
                    <div>
                        Appointment Booked, Appointment id {}
                    </div>
            </div>}
        <div className="flex justify-center mt-5">
            <Button onClick={onBookAppointment}>Book your appointment</Button>
        </div>
    </div>
    );
}
