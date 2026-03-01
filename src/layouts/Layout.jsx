import {  Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { NavbarMobile } from "../components/NavbarMobile";
import ScrollToTop from "../components/ScrollToTop";


export default function Layout(){
    return(
        <div className="bg-slate-950 min-h-screen text-white">
            <Navbar/>
            <NavbarMobile/>
            <ScrollToTop/>
            <Outlet/>
        </div>
    );
}