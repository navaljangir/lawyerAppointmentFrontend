/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { IRootState } from "src/lib/store"
import { useEffect, useState } from "react"
import { firms, lawyerTypes } from "src/lib/data/database"
import { setLawyers } from "src/lib/slices/selectLawyers"
import { Button } from "./ui/button"
import { BookingSideBar } from "./BookingSidebar"
import { lawyerDetailType, setBookingDetails } from "src/lib/slices/bookingDetails"
import { LawyerDetailsPage } from "./LawyerDetails"

export function Lawyers() {
    const [lawyerType,setLawyerType] = useState('.')
    const [lawyerFirm, setLawyerFirm] = useState('.')
    const lawyers = useSelector((state: IRootState) => state.selectLawyers)
    const [bookingSidebarToggle , setBookingSidebarToggle] = useState(false)
    const dispatch = useDispatch()
    const changeLawyerType = (val: string) => {
        setLawyerType(val)
    }
    const changeLawyerFirm = (val: string) => {
        setLawyerFirm(val)
    }
    const bookAppointment = (val : lawyerDetailType)=>{
        console.log(val)
        if(bookingSidebarToggle==false){
            setBookingSidebarToggle((val)=> !val)
        }
        dispatch(setBookingDetails(val))
    }
    useEffect(() => {
        console.log('lawyerType:', lawyerType)
        console.log('lawyerFirm:', lawyerFirm)
        dispatch(setLawyers({ lawyerFirm, lawyerType }))
    }, [lawyerType, lawyerFirm])
    return <div className="">
        <div className="flex gap-2 pt-10 px-10">
            <Select onValueChange={changeLawyerType}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Lawyer Type" />
                </SelectTrigger>
                <SelectContent>
                    {lawyerTypes.map((val, index) => {
                        return <SelectItem value={val.value} key={index}>{val.type}</SelectItem>
                    })}
                </SelectContent>
            </Select>
            <Select onValueChange={changeLawyerFirm}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Firm" />
                </SelectTrigger>
                <SelectContent>
                    {firms.map((val, index) => {
                        return <SelectItem value={val.value} key={index}>{val.firmName}</SelectItem>
                    })}
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Cost" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="<100">{`<100`}</SelectItem>
                    <SelectItem value="200">200</SelectItem>
                    <SelectItem value="300">300</SelectItem>
                </SelectContent>
            </Select>

        </div>
        <div className="flex flex-wrap gap-5 justify-center py-10">
            {lawyers.length == 0 && <div>No Lawyers Found</div>}
            {lawyers.map((val, index) => {
                return <div className="border rounded-md w-[400px] px-2 py-2" key={index}>
                    <div className="flex justify-center pb-3">
                        <div className="h-28 w-28 rounded-full border border-black border-dashed p-1">
                            <img src={val.imgUrl} className="object-cover rounded-full" />
                        </div>
                    </div>
                    <LawyerDetailsPage val={val}/>
                    <div className="flex justify-center">
                        <Button onClick={()=> bookAppointment(val)}>Book Your Appointment</Button>
                    </div>
                </div>
            })}
        </div>
        <div className="flex justify-center">
            Charges are for per appointment
        </div>
        {bookingSidebarToggle && <div className="fixed top-0 left-0 h-screen w-screen">
            <div className="bg-black opacity-20 z-10 fixed left-0 top-0 w-full h-full" onClick={()=> {
                setBookingSidebarToggle((val)=> !val)
            }}> hi there</div>
            <div
        className={`fixed h-screen top-0 right-0 z-20 bg-white md:w-1/3`}
      >
        <BookingSideBar />
      </div>
        </div>}
    </div>
}