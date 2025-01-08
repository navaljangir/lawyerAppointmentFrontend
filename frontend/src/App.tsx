import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { LandingPage } from "./components/LandingPage"
import { AboutPage } from "./components/About"
import './App.css';
import { Lawyers } from "./components/Lawyers";
import {Toaster} from 'sonner'
import { AppointmentDetails } from "./components/AppointmentDetails";
function App() {

  return (
    <>
      <Toaster position="bottom-right"/>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout/>}>
            <Route path="" element={<LandingPage/>}></Route>
            <Route path="about" element={<AboutPage/>}></Route>
            <Route path="lawyers" element={<Lawyers/>}></Route>
            <Route path="details" element={<AppointmentDetails/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
