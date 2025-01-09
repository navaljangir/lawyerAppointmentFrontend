import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"


const navlinks = [
    {
        name : 'Home' ,
        link : '/'
    } , 
    {
       name : 'Lawyers', 
       link : '/lawyers' 
    } , 
    {
        name : 'Get Appointment Details' , 
        link : '/details/' 
    } , 
    {
        name : 'About us' , 
        link : 'about'
    }, 
]
export function Appbar(){
    const navigate = useNavigate()
    return <div className="border-b">
        <div className="flex justify-center gap-20 px-40 py-5">
            {navlinks.map((val , index)=>{
                return <Button key={index} onClick={()=> navigate(`${val.link}`)} className="bg-white text-black hover:underline hover:bg-white hover:text-blue-800">{val.name}</Button>
            })}
        </div>
    </div>
}