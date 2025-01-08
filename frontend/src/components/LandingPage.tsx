import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export function LandingPage(){
    const navigate = useNavigate();
    return <div className="flex justify-center mt-52">
        <div>
        <div className="flex justify-center text-7xl bg-gradient-to-r mb-3 from-orange-400 to-red-800 bg-clip-text text-transparent">
            Welcome to LegalSolutions
        </div>

        <div className="flex justify-center text-xl">
        Finding the right lawyer doesn't have to be stressful.
        </div>
        <div className="flex justify-center">
         At LegalSolution, we're here to make the process simple and hassle-free by connecting you with trusted legal professionals who are ready to help.

        </div>
        <div className="flex justify-center">
            <Button onClick={()=> navigate('/booking')}>Book Your Appointment</Button>
        </div>
        </div>

    </div>
}