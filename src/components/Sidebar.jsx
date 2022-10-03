import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from './Navbar';
import ImgLogo from '../asset/img/logo-sidebar.png'


/*inicio */
import { BsFillBookmarkStarFill } from "react-icons/bs";

/* empresa*/
import { AiFillBank } from "react-icons/ai";

/* usuarios*/
import { FaApplePay, FaBookDead, FaUserFriends } from "react-icons/fa";

/* reportes*/
import { BsBarChartFill } from "react-icons/bs";

/*configuracion */
import { BsFillGearFill } from "react-icons/bs";


/*comprobantes de pago */
import { HiOutlineClipboardList } from "react-icons/hi";

/* guia de remision*/
import { HiTicket } from "react-icons/hi";

/* reportes*/
import { BsFileBarGraphFill } from "react-icons/bs";



import { BsFillCaretRightSquareFill } from "react-icons/bs";







export default function Sidebar({ sidebarOpen, setSidebarOpen }) {

  const [OpenSidebar, setOpenSidebar]=useState('-left-64')


  const location = useLocation();
  const { pathname } = location;
  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  return (
    <>
    <Navbar 
    OpenSidebar={OpenSidebar}
    setOpenSidebar={setOpenSidebar}
    />


    <div className={`bg-[#151423] w-64 z-40 py-4 px-2 h-screen fixed top-0 md:left-0  ${OpenSidebar}    `}>
      <div>
      <div className="flex justify-center">
          <img src={ImgLogo} alt={ImgLogo} className="h-10 w-32"/>
        </div>

        <div className='flex flex-col' onClick={() => setOpenSidebar('-left-64')}>
         { /*<hr className="my-4 min-w-full"/>*/}
          
          {/*inicio */}
          <div className='flex-col text-white hover:text-black hover:bg-white rounded-lg mb-4 px-2 py-3'>
            <NavLink to="/" className="flex" >
            <BsFillBookmarkStarFill className="text-xl"/>
              <span className='text-sm font-semibold ml-4'>Inicio</span>
            </NavLink>
          </div>

          {/*factura */}
          <div className='flex-col text-white hover:text-black hover:bg-white rounded-lg mb-4 px-2 py-3'>
            <NavLink to="/factura" className="flex" >
            <AiFillBank className="text-xl" />
              <span className='text-sm font-semibold ml-4'>Factura</span>
            </NavLink>
          </div>
          {/*boleta */}
          <div className='flex-col text-white hover:text-black hover:bg-white rounded-lg mb-4 px-2 py-3'>
            <NavLink to="/boleta" className="flex" >
            <FaApplePay className="text-xl" />
              <span className='text-sm font-semibold ml-4'>Boleta</span>
            </NavLink>
          </div>

          {/*usuarios */}
          <div className='flex-col text-white hover:text-black hover:bg-white rounded-lg mb-4 px-2 py-3'>
            <NavLink to="/usuario" className="flex" >
            <FaUserFriends className="text-xl" />
              <span className='text-sm font-semibold ml-4'>Usuarios</span>
            </NavLink>
          </div>

          {/*reporte */}
          <div className='flex-col text-white hover:text-black hover:bg-white rounded-lg mb-4 px-2 py-3'>
            <NavLink to="/reportes" className="flex" >
            <BsBarChartFill className="text-xl" />
              <span className='text-sm font-semibold ml-4'>Reportes</span>
            </NavLink>
          </div>

          {/*configuracion */}
          <div className='flex-col text-white hover:text-black hover:bg-white rounded-lg mb-4 px-2 py-3'>
            <NavLink to="/configuracion" className="flex" >
            <BsFillGearFill className="text-xl" />
              <span className='text-sm font-semibold ml-4'>Configuración</span>
            </NavLink>
          </div>



        


         
              






        </div>
      </div>


      
    </div>

    </>
  )
}
