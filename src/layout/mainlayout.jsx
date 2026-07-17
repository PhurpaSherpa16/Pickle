import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MainLayout(){
    const location = useLocation()
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    useEffect(()=>{
        if(location.hash){
        const element = document.querySelector(location.hash)
        if(element){
            element.scrollIntoView({behavior:'smooth',block:'start'})
        }
        }

    },[location])

    return(
        <div className='min-h-screen relative overflow-hidden w-screen'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
    