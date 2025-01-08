import { Outlet } from "react-router-dom";
import { Appbar } from "./Appbar";

export function Layout(){
    return <div className="flex flex-col h-screen">
        <div>
        <Appbar/>
        </div>
        <div className="h-full">
        <Outlet/>
        </div>
    </div>
}